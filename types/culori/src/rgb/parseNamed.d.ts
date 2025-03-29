import named from "../colors/named.js";
import { Color } from "../common.js";

declare function parseNamed(color: keyof typeof named): Color;

export default parseNamed;
