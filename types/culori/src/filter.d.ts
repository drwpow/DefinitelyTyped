import { Mode } from "./common.js";
import { ColorToSameColorMapper } from "./map.js";

type Filter = (amt?: number, mode?: Mode) => ColorToSameColorMapper;

declare const filterBrightness: Filter;
declare const filterContrast: Filter;
declare const filterSepia: Filter;
declare const filterSaturate: Filter;
declare const filterGrayscale: Filter;
declare const filterInvert: Filter;
declare const filterHueRotate: Filter;

export {
    filterBrightness,
    filterContrast,
    filterGrayscale,
    filterHueRotate,
    filterInvert,
    filterSaturate,
    filterSepia,
};
