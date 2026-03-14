/**
 * remove-logo-bg.mjs
 * Reads logo.png, makes near-white pixels transparent, saves logo-transparent.png
 */
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input  = path.join(__dirname, "../public/images/logo.png");
const output = path.join(__dirname, "../public/images/logo-transparent.png");

const THRESHOLD = 230; // pixels with R,G,B all >= this value are considered "white"

const image = sharp(input).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info; // channels = 4 (RGBA)
const buf = Buffer.from(data);

for (let i = 0; i < buf.length; i += channels) {
  const r = buf[i];
  const g = buf[i + 1];
  const b = buf[i + 2];

  if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
    // Near-white: make fully transparent
    buf[i + 3] = 0;
  }
}

await sharp(buf, { raw: { width, height, channels } })
  .png()
  .toFile(output);

console.log(`✅  Saved transparent logo to ${output}`);
