import { fixupAlpha } from "../fixup/alpha.js";
import { interpolatorLinear } from "../interpolate/linear.js";
import parseHex from "./parseHex.js";
import parseNamed from "./parseNamed.js";
import parseRgb from "./parseRgb.js";
import parseTransparent from "./parseTransparent.js";

declare const definition: {
    mode: "rgb";
    channels: ["r", "g", "b", "alpha"];
    parse: [typeof parseHex, typeof parseRgb, typeof parseNamed, typeof parseTransparent, "srgb"];
    serialize: "srgb";

    interpolate: {
        r: typeof interpolatorLinear;
        g: typeof interpolatorLinear;
        b: typeof interpolatorLinear;
        alpha: { use: typeof interpolatorLinear; fixup: typeof fixupAlpha };
    };
};

export default definition;
