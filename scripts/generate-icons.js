// Generate favicon and app icons from a single source logo using sharp
// Usage: npm run icons
// Requires devDependencies: sharp, png-to-ico

import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = path.resolve(process.cwd());
const publicDir = path.join(root, 'public');
const sourcePath = path.join(publicDir, 'logo.png');

const targets = [
  { file: 'favicon-16x16.png', size: 16 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
];

async function ensurePublicDir() {
  try { await fs.access(publicDir); } 
  catch { await fs.mkdir(publicDir, { recursive: true }); }
}

async function main() {
  await ensurePublicDir();
  try {
    await fs.access(sourcePath);
  } catch (e) {
    console.error(`\n[icons] Missing source logo: ${sourcePath}`);
    console.error('[icons] Please add your high-resolution transparent PNG as public/logo.png (at least 512x512).');
    process.exit(1);
  }

  // Generate PNG sizes
  await Promise.all(targets.map(async ({ file, size }) => {
    const out = path.join(publicDir, file);
    await sharp(sourcePath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out);
    console.log(`[icons] Wrote ${file}`);
  }));

  // Create favicon.ico from 16 and 32 PNGs
  const icoOut = path.join(publicDir, 'favicon.ico');
  const png16 = await fs.readFile(path.join(publicDir, 'favicon-16x16.png'));
  const png32 = await fs.readFile(path.join(publicDir, 'favicon-32x32.png'));
  const icoBuffer = await pngToIco([png16, png32]);
  await fs.writeFile(icoOut, icoBuffer);
  console.log('[icons] Wrote favicon.ico');

  // Create Open Graph image 1200x630 (with padding and background)
  const ogOut = path.join(publicDir, 'og-image.png');
  const ogW = 1200, ogH = 630;
  // Place the logo centered on a light background
  const logoBuffer = await sharp(sourcePath)
    .resize(600, 600, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  const bg = await sharp({ create: { width: ogW, height: ogH, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } })
    .png()
    .toBuffer();
  await sharp(bg)
    .composite([{ input: logoBuffer, gravity: 'center' }])
    .png()
    .toFile(ogOut);
  console.log('[icons] Wrote og-image.png (1200x630)');

  console.log('\n[icons] Done. Make sure index.html links and site.webmanifest are already pointing to these files.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
