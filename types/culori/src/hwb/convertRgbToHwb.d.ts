import { Rgb } from "../rgb/types.js";
import { Hwb } from "./types.js";

export default function convertRgbToHwb(color: Omit<Rgb, "mode">): Hwb;
