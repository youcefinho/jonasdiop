import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

/**
 * Convertit les 3 photos réelles de Jonas Diop (Downloads → public/photos/).
 *
 * Pour chaque photo, génère :
 *   - <name>.jpg (optimized JPG fallback, q 85)
 *   - <name>.webp (q 85)
 *   - <name>.avif (q 75)
 *
 * Resize si trop large pour le web (>2000px côté max).
 */

interface PhotoSource {
  src: string;
  dest: string;
  maxWidth: number;
  description: string;
}

const PHOTOS: ReadonlyArray<PhotoSource> = [
  {
    src: 'C:/Users/rochdi/Downloads/IMG-9839.JPG',
    dest: 'jonas-speaking',
    maxWidth: 1920,
    description: 'Jonas Diop devant un public — speaking authority shot'
  },
  {
    src: 'C:/Users/rochdi/Downloads/459337825_1114534906901647_7667763746176843731_n.jpg',
    dest: 'jonas-portrait-contemplative',
    maxWidth: 1080,
    description: 'Jonas Diop portrait studio fauteuil rouge — contemplative'
  },
  {
    src: 'C:/Users/rochdi/Downloads/3.png',
    dest: 'jonas-portrait-direct',
    maxWidth: 1200,
    description: 'Jonas Diop portrait studio fauteuil rouge — direct gaze'
  }
];

const OUTPUT_DIR = 'C:/Users/rochdi/.gemini/antigravity-ide/scratch/jonas-diop/public/photos';

async function convertPhoto(photo: PhotoSource): Promise<void> {
  const buffer = await readFile(photo.src);
  const meta = await sharp(buffer).metadata();
  console.log(`\n📸 ${photo.dest}.* (source ${meta.width}×${meta.height})`);

  const pipeline = sharp(buffer)
    .resize({
      width: photo.maxWidth,
      withoutEnlargement: true,
      fit: 'inside'
    })
    .rotate(); // respect EXIF orientation

  // JPG fallback
  const jpg = await pipeline
    .clone()
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toBuffer();
  await writeFile(join(OUTPUT_DIR, `${photo.dest}.jpg`), jpg);
  console.log(`  ✓ .jpg   ${(jpg.length / 1024).toFixed(1)} kB`);

  // WebP
  const webp = await pipeline.clone().webp({ quality: 85, effort: 6 }).toBuffer();
  await writeFile(join(OUTPUT_DIR, `${photo.dest}.webp`), webp);
  console.log(`  ✓ .webp  ${(webp.length / 1024).toFixed(1)} kB`);

  // AVIF
  const avif = await pipeline.clone().avif({ quality: 65, effort: 6 }).toBuffer();
  await writeFile(join(OUTPUT_DIR, `${photo.dest}.avif`), avif);
  console.log(`  ✓ .avif  ${(avif.length / 1024).toFixed(1)} kB`);
}

async function main(): Promise<void> {
  console.log('🔧 Conversion photos réelles Jonas Diop → public/photos/');
  for (const photo of PHOTOS) {
    await convertPhoto(photo);
  }
  console.log('\n✅ Done. 3 photos × 3 formats = 9 fichiers générés dans public/photos/');
}

await main();
