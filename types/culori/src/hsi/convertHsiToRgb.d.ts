import { Rgb } from "../rgb/types.js";
import { Hsi } from "./types.js";

export default function convertHsiToRgb(color: Omit<Hsi, "mode">): Rgb;
