import { Rgb } from "../rgb/types.js";
import { Hsv } from "./types.js";

export default function convertRgbToHsv(color: Omit<Rgb, "mode">): Hsv;
