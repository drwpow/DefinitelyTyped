import Diff = require("diff");

const one = "beep boop";
const other = "beep boob blah";

let changes = Diff.diffChars(one, other);
examineChanges(changes);

// $ExpectType void
Diff.diffChars(one, other, {
    callback: (value) => {
        value; // $ExpectType Change[]
    },
});
// $ExpectType void
Diff.diffChars(one, other, (value) => {
    value; // $ExpectType Change[]
});
Diff.diffWords("吾輩は猫である。名前はまだ無い。", "吾輩は猫である。名前はたぬき。", {
    intlSegmenter: new Intl.Segmenter("ja-JP", { granularity: "word" }),
});
// $ExpectType Change[]
Diff.diffLines(
    "line\nold value\nline",
    "line\nnew value\nline",
    {
        stripTrailingCr: true,
        ignoreNewlineAtEof: true,
        maxEditLength: 1,
        oneChangePerToken: true,
    },
);
// $ExpectType void
Diff.createPatch("filename", "A", "a", undefined, undefined, {
    callback: (value) => {
        value; // $ExpectType string
    },
});

const diffArraysResult = Diff.diffArrays(["a", "b", "c"], ["a", "c", "d"]);
diffArraysResult.forEach(result => {
    result.added; // $ExpectType boolean | undefined
    result.removed; // $ExpectType boolean | undefined
    result.value; // $ExpectType string[]
    result.count; // $ExpectType number | undefined
});

interface DiffObj {
    value: number;
}
const a: DiffObj = { value: 0 };
const b: DiffObj = { value: 1 };
const c: DiffObj = { value: 2 };
const d: DiffObj = { value: 3 };
const arrayOptions: Diff.ArrayOptions<DiffObj, DiffObj> = {
    comparator: (left, right) => {
        return left.value === right.value;
    },
};
const arrayChanges = Diff.diffArrays([a, b, c], [a, b, d], arrayOptions);
arrayChanges.forEach(result => {
    result.added; // $ExpectType boolean | undefined
    result.removed; // $ExpectType boolean | undefined
    result.value; // $ExpectType DiffObj[]
    result.count; // $ExpectType number | undefined
});

// --------------------------

class LineDiffWithoutWhitespace extends Diff.Diff {
    tokenize(value: string): any {
        return value.split(/^/m);
    }

    equals(left: string, right: string): boolean {
        return left.trim() === right.trim();
    }
}

const obj = new LineDiffWithoutWhitespace();
changes = obj.diff(one, other);
examineChanges(changes);

function examineChanges(diff: Diff.Change[]) {
    diff.forEach(part => {
        part.added; // $ExpectType boolean
        part.removed; // $ExpectType boolean
        part.value; // $ExpectType string
        part.count; // $ExpectType number | undefined
    });
}

function verifyPatchMethods(oldStr: string, newStr: string, uniDiff: Diff.ParsedDiff) {
    const verifyPatch = Diff.parsePatch(
        Diff.createTwoFilesPatch("oldFile.ts", "newFile.ts", oldStr, newStr, "old", "new", {
            context: 1,
            stripTrailingCr: true,
        }),
    );

    if (
        JSON.stringify(verifyPatch[0], Object.keys(verifyPatch[0]).sort())
            !== JSON.stringify(uniDiff, Object.keys(uniDiff).sort())
    ) {
        throw new Error("Patch did not match uniDiff");
    }
}
function verifyApplyMethods(oldStr: string, newStr: string, uniDiffStr: string) {
    const uniDiff = Diff.parsePatch(uniDiffStr)[0];
    const verifyApply = [Diff.applyPatch(oldStr, uniDiff), Diff.applyPatch(oldStr, [uniDiff])];
    const options: Diff.ApplyPatchesOptions = {
        loadFile(index, callback) {
            index; // $ExpectType ParsedDiff
            callback(undefined, one);
        },
        patched(index, content) {
            index; // $ExpectType ParsedDiff
            if (content !== false) {
                verifyApply.push(content);
            }
        },
        complete(err) {
            if (err) {
                throw err;
            }

            verifyApply.forEach(result => {
                if (result !== newStr) {
                    throw new Error("Result did not match newStr");
                }
            });
        },
        compareLine(_, line, operator, patchContent) {
            if (operator === " ") {
                return true;
            }
            return line === patchContent;
        },
        fuzzFactor: 0,
    };
    Diff.applyPatches([uniDiff], options);
    Diff.applyPatches(uniDiffStr, options);
}

const uniDiffPatch = Diff.structuredPatch("oldFile.ts", "newFile.ts", one, other, "old", "new", {
    context: 1,
});
verifyPatchMethods(one, other, uniDiffPatch);

const formatted: string = Diff.formatPatch(uniDiffPatch);

const uniDiffStr = Diff.createPatch("file.ts", one, other, "old", "new", { context: 1 });
verifyApplyMethods(one, other, uniDiffStr);

const file1 = "line1\nline2\nline3\nline4\n";
const file2 = "line1\nline2\nline5\nline4\n";
const patch = Diff.structuredPatch("file1", "file2", file1, file2);
// $ExpectType ParsedDiff
const reversedPatch = Diff.reversePatch(patch);
// $ExpectType ParsedDiff[]
const verifyPatch = Diff.parsePatch(
    Diff.createTwoFilesPatch("oldFile.ts", "newFile.ts", "old content", "new content", "old", "new", {
        context: 1,
    }),
);

const wordDiff = new Diff.Diff();
wordDiff.equals = function(left, right, options) {
    if (options.ignoreWhitespace) {
        if (!options.newlineIsToken || !left.includes("\n")) {
            left = left.trim();
        }
        if (!options.newlineIsToken || !right.includes("\n")) {
            right = right.trim();
        }
    }
    return Diff.Diff.prototype.equals.call(this, left, right, options);
};
