import modeA98 from "./src/a98/definition.js";
import { ConvertFn } from "./src/converter.js";
import modeCubehelix from "./src/cubehelix/definition.js";
import modeDlab from "./src/dlab/definition.js";
import modeDlch from "./src/dlch/definition.js";
import modeHsi from "./src/hsi/definition.js";
import modeHsl from "./src/hsl/definition.js";
import modeHsv from "./src/hsv/definition.js";
import modeHwb from "./src/hwb/definition.js";
import modeJab from "./src/jab/definition.js";
import modeJch from "./src/jch/definition.js";
import modeLab from "./src/lab/definition.js";
import modeLab65 from "./src/lab65/definition.js";
import modeLch from "./src/lch/definition.js";
import modeLch65 from "./src/lch65/definition.js";
import modeLchuv from "./src/lchuv/definition.js";
import modeLrgb from "./src/lrgb/definition.js";
import modeLuv from "./src/luv/definition.js";
import { useMode } from "./src/modes.js";
import modeOkhsl from "./src/okhsl/modeOkhsl.js";
import modeOkhsv from "./src/okhsv/modeOkhsv.js";
import modeOklab from "./src/oklab/definition.js";
import modeOklch from "./src/oklch/definition.js";
import modeP3 from "./src/p3/definition.js";
import modeProphoto from "./src/prophoto/definition.js";
import modeRec2020 from "./src/rec2020/definition.js";
import modeRgb from "./src/rgb/definition.js";
import modeXyb from "./src/xyb/definition.js";
import modeXyz50 from "./src/xyz50/definition.js";
import modeXyz65 from "./src/xyz65/definition.js";
import modeYiq from "./src/yiq/definition.js";

export { default as converter } from "./src/converter.js";

export {
    formatCss,
    formatHex,
    formatHex8,
    formatHsl,
    formatRgb,
    serializeHex,
    serializeHex8,
    serializeHsl,
    serializeRgb,
} from "./src/formatter.js";

export { default as blend } from "./src/blend.js";
export { default as colorsNamed } from "./src/colors/named.js";
export { default as random } from "./src/random.js";

export { fixupHueDecreasing, fixupHueIncreasing, fixupHueLonger, fixupHueShorter } from "./src/fixup/hue.js";

export { fixupAlpha } from "./src/fixup/alpha.js";

export { mapAlphaDivide, mapAlphaMultiply, mapper, mapTransferGamma, mapTransferLinear } from "./src/map.js";

export { average, averageAngle, averageNumber } from "./src/average.js";

export { interpolate, interpolateWith, interpolateWithPremultipliedAlpha } from "./src/interpolate/interpolate.js";
export { default as round } from "./src/round.js";

export { interpolatorLinear } from "./src/interpolate/linear.js";

export { interpolatorPiecewise } from "./src/interpolate/piecewise.js";

export { interpolatorSplineBasis, interpolatorSplineBasisClosed } from "./src/interpolate/splineBasis.js";

export { interpolatorSplineNatural, interpolatorSplineNaturalClosed } from "./src/interpolate/splineNatural.js";

export {
    interpolatorSplineMonotone,
    interpolatorSplineMonotone2,
    interpolatorSplineMonotoneClosed,
} from "./src/interpolate/splineMonotone.js";

export { clampChroma, clampGamut, clampRgb, displayable, inGamut, toGamut } from "./src/clamp.js";
export { default as lerp } from "./src/interpolate/lerp.js";
export { getMode, removeParser, useMode, useParser } from "./src/modes.js";
export { default as nearest } from "./src/nearest.js";
export { default as parse } from "./src/parse.js";
export { default as samples } from "./src/samples.js";

export {
    differenceCie76,
    differenceCie94,
    differenceCiede2000,
    differenceCmc,
    differenceEuclidean,
    differenceHueChroma,
    differenceHueNaive,
    differenceHueSaturation,
    differenceHyab,
    differenceKotsarenkoRamos,
} from "./src/difference.js";

export {
    filterBrightness,
    filterContrast,
    filterGrayscale,
    filterHueRotate,
    filterInvert,
    filterSaturate,
    filterSepia,
} from "./src/filter.js";

export { filterDeficiencyDeuter, filterDeficiencyProt, filterDeficiencyTrit } from "./src/deficiency.js";

export { default as easingGamma } from "./src/easing/gamma.js";
export { default as easingInOutSine } from "./src/easing/inOutSine.js";
export { default as easingMidpoint } from "./src/easing/midpoint.js";
export { default as easingSmootherstep } from "./src/easing/smootherstep.js";
export { default as easingSmoothstep } from "./src/easing/smoothstep.js";

export { contrast as wcagContrast, luminance as wcagLuminance } from "./src/wcag.js";

export { default as parseHsl } from "./src/hsl/parseHsl.js";
export { default as parseHwb } from "./src/hwb/parseHwb.js";
export { default as parseLab } from "./src/lab/parseLab.js";
export { default as parseLch } from "./src/lch/parseLch.js";
export { default as parseHex } from "./src/rgb/parseHex.js";
export { default as parseNamed } from "./src/rgb/parseNamed.js";
export { default as parseRgb } from "./src/rgb/parseRgb.js";
export { default as parseTransparent } from "./src/rgb/parseTransparent.js";

export { default as convertA98ToXyz65 } from "./src/a98/convertA98ToXyz65.js";
export { default as convertXyz65ToA98 } from "./src/a98/convertXyz65ToA98.js";
export { default as convertCubehelixToRgb } from "./src/cubehelix/convertCubehelixToRgb.js";
export { default as convertRgbToCubehelix } from "./src/cubehelix/convertRgbToCubehelix.js";
export { default as convertDlchToLab65 } from "./src/dlch/convertDlchToLab65.js";
export { default as convertLab65ToDlch } from "./src/dlch/convertLab65ToDlch.js";
export { default as convertHsiToRgb } from "./src/hsi/convertHsiToRgb.js";
export { default as convertRgbToHsi } from "./src/hsi/convertRgbToHsi.js";
export { default as convertHslToRgb } from "./src/hsl/convertHslToRgb.js";
export { default as convertRgbToHsl } from "./src/hsl/convertRgbToHsl.js";
export { default as convertHsvToRgb } from "./src/hsv/convertHsvToRgb.js";
export { default as convertRgbToHsv } from "./src/hsv/convertRgbToHsv.js";
export { default as convertHwbToRgb } from "./src/hwb/convertHwbToRgb.js";
export { default as convertRgbToHwb } from "./src/hwb/convertRgbToHwb.js";
export { default as convertJabToRgb } from "./src/jab/convertJabToRgb.js";
export { default as convertJabToXyz65 } from "./src/jab/convertJabToXyz65.js";
export { default as convertRgbToJab } from "./src/jab/convertRgbToJab.js";
export { default as convertXyz65ToJab } from "./src/jab/convertXyz65ToJab.js";
export { default as convertJabToJch } from "./src/jch/convertJabToJch.js";
export { default as convertJchToJab } from "./src/jch/convertJchToJab.js";
export { default as convertLabToRgb } from "./src/lab/convertLabToRgb.js";
export { default as convertLabToXyz50 } from "./src/lab/convertLabToXyz50.js";
export { default as convertRgbToLab } from "./src/lab/convertRgbToLab.js";
export { default as convertXyz50ToLab } from "./src/lab/convertXyz50ToLab.js";
export { default as convertLab65ToRgb } from "./src/lab65/convertLab65ToRgb.js";
export { default as convertLab65ToXyz65 } from "./src/lab65/convertLab65ToXyz65.js";
export { default as convertRgbToLab65 } from "./src/lab65/convertRgbToLab65.js";
export { default as convertXyz65ToLab65 } from "./src/lab65/convertXyz65ToLab65.js";
export { default as convertLabToLch } from "./src/lch/convertLabToLch.js";
export { default as convertLchToLab } from "./src/lch/convertLchToLab.js";
export { default as convertLchuvToLuv } from "./src/lchuv/convertLchuvToLuv.js";
export { default as convertLuvToLchuv } from "./src/lchuv/convertLuvToLchuv.js";
export { default as convertLrgbToRgb } from "./src/lrgb/convertLrgbToRgb.js";
export { default as convertRgbToLrgb } from "./src/lrgb/convertRgbToLrgb.js";
export { default as convertLuvToXyz50 } from "./src/luv/convertLuvToXyz50.js";
export { default as convertXyz50ToLuv } from "./src/luv/convertXyz50ToLuv.js";
export { default as convertOkhslToOklab } from "./src/okhsl/convertOkhslToOklab.js";
export { default as convertOklabToOkhsl } from "./src/okhsl/convertOklabToOkhsl.js";
export { default as convertOkhsvToOklab } from "./src/okhsv/convertOkhsvToOklab.js";
export { default as convertOklabToOkhsv } from "./src/okhsv/convertOklabToOkhsv.js";
export { default as convertLrgbToOklab } from "./src/oklab/convertLrgbToOklab.js";
export { default as convertOklabToLrgb } from "./src/oklab/convertOklabToLrgb.js";
export { default as convertOklabToRgb } from "./src/oklab/convertOklabToRgb.js";
export { default as convertRgbToOklab } from "./src/oklab/convertRgbToOklab.js";
export { default as convertP3ToXyz65 } from "./src/p3/convertP3ToXyz65.js";
export { default as convertXyz65ToP3 } from "./src/p3/convertXyz65ToP3.js";
export { default as convertProphotoToXyz50 } from "./src/prophoto/convertProphotoToXyz50.js";
export { default as convertXyz50ToProphoto } from "./src/prophoto/convertXyz50ToProphoto.js";
export { default as convertRec2020ToXyz65 } from "./src/rec2020/convertRec2020ToXyz65.js";
export { default as convertXyz65ToRec2020 } from "./src/rec2020/convertXyz65ToRec2020.js";
export { default as convertRgbToXyb } from "./src/xyb/convertRgbToXyb.js";
export { default as convertXybToRgb } from "./src/xyb/convertXybToRgb.js";
export { default as convertRgbToXyz50 } from "./src/xyz50/convertRgbToXyz50.js";
export { default as convertXyz50ToRgb } from "./src/xyz50/convertXyz50ToRgb.js";
export { default as convertRgbToXyz65 } from "./src/xyz65/convertRgbToXyz65.js";
export { default as convertXyz50ToXyz65 } from "./src/xyz65/convertXyz50ToXyz65.js";
export { default as convertXyz65ToRgb } from "./src/xyz65/convertXyz65ToRgb.js";
export { default as convertXyz65ToXyz50 } from "./src/xyz65/convertXyz65ToXyz50.js";
export { default as convertRgbToYiq } from "./src/yiq/convertRgbToYiq.js";
export { default as convertYiqToRgb } from "./src/yiq/convertYiqToRgb.js";

export {
    modeA98,
    modeCubehelix,
    modeDlab,
    modeDlch,
    modeHsi,
    modeHsl,
    modeHsv,
    modeHwb,
    modeJab,
    modeJch,
    modeLab,
    modeLab65,
    modeLch,
    modeLch65,
    modeLchuv,
    modeLrgb,
    modeLuv,
    modeOkhsl,
    modeOkhsv,
    modeOklab,
    modeOklch,
    modeP3,
    modeProphoto,
    modeRec2020,
    modeRgb,
    modeXyb,
    modeXyz50,
    modeXyz65,
    modeYiq,
};

export const a98: ConvertFn<"a98">;
export const cubehelix: ConvertFn<"cubehelix">;
export const dlab: ConvertFn<"dlab">;
export const dlch: ConvertFn<"dlch">;
export const hsi: ConvertFn<"hsi">;
export const hsl: ConvertFn<"hsl">;
export const hsv: ConvertFn<"hsv">;
export const hwb: ConvertFn<"hwb">;
export const jab: ConvertFn<"jab">;
export const jch: ConvertFn<"jch">;
export const lab: ConvertFn<"lab">;
export const lab65: ConvertFn<"lab65">;
export const lch: ConvertFn<"lch">;
export const lch65: ConvertFn<"lch65">;
export const lchuv: ConvertFn<"lchuv">;
export const lrgb: ConvertFn<"lrgb">;
export const luv: ConvertFn<"luv">;
export const okhsl: ConvertFn<"okhsl">;
export const okhsv: ConvertFn<"okhsv">;
export const oklab: ConvertFn<"oklab">;
export const oklch: ConvertFn<"oklch">;
export const p3: ConvertFn<"p3">;
export const prophoto: ConvertFn<"prophoto">;
export const rec2020: ConvertFn<"rec2020">;
// tslint:disable-next-line:use-default-type-parameter
export const rgb: ConvertFn<"rgb">;
export const xyb: ConvertFn<"xyb">;
export const xyz50: ConvertFn<"xyz50">;
export const xyz65: ConvertFn<"xyz65">;
export const yiq: ConvertFn<"yiq">;

/* Types */

export type { A98 } from "./src/a98/types.js";
export { Color, Gamut, GamutMode, Mode } from "./src/common.js";
export type { Cubehelix } from "./src/cubehelix/types.js";
export type { Dlab } from "./src/dlab/types.js";
export type { Dlch } from "./src/dlch/types.js";
export type { Hsi } from "./src/hsi/types.js";
export type { Hsl } from "./src/hsl/types.js";
export type { Hsv } from "./src/hsv/types.js";
export type { Hwb } from "./src/hwb/types.js";
export type { Jab } from "./src/jab/types.js";
export type { Jch } from "./src/jch/types.js";
export type { Lab } from "./src/lab/types.js";
export type { Lab65 } from "./src/lab65/types.js";
export type { Lch } from "./src/lch/types.js";
export type { Lch65 } from "./src/lch65/types.js";
export type { Lchuv } from "./src/lchuv/types.js";
export type { Lrgb } from "./src/lrgb/types.js";
export type { Luv } from "./src/luv/types.js";
export type { Okhsl } from "./src/okhsl/types.js";
export type { Okhsv } from "./src/okhsv/types.js";
export type { Oklab } from "./src/oklab/types.js";
export type { Oklch } from "./src/oklch/types.js";
export type { P3 } from "./src/p3/types.js";
export type { Prophoto } from "./src/prophoto/types.js";
export type { Rec2020 } from "./src/rec2020/types.js";
export type { Rgb } from "./src/rgb/types.js";
export type { Xyb } from "./src/xyb/types.js";
export type { Xyz50 } from "./src/xyz50/types.js";
export type { Xyz65 } from "./src/xyz65/types.js";
export type { Yiq } from "./src/yiq/types.js";
