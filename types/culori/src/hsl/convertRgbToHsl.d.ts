import { Rgb } from "../rgb/types.js";
import { Hsl } from "./types.js";

export default function convertRgbToHsl(color: Omit<Rgb, "mode">): Hsl;
