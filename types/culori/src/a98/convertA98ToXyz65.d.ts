import { Xyz50 } from "../xyz50/types.js";
import { A98 } from "./types.js";

declare function convertA98ToXyz65(color: Omit<A98, "mode">): Xyz50;

export default convertA98ToXyz65;
