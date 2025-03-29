import { Rgb } from "../rgb/types.js";
import { Hsl } from "./types.js";

export default function convertHslToRgb(color: Omit<Hsl, "mode">): Rgb;
