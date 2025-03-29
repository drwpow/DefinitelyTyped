import { Rgb } from "../rgb/types.js";
import { Hsv } from "./types.js";

export default function convertHsvToRgb(color: Omit<Hsv, "mode">): Rgb;
