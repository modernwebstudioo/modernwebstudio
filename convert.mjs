import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function convert() {
  const dir = path.join(process.cwd(), 'public', 'images');
  const files = await fs.readdir(dir);
  for (const file of files) {
    if (file.endsWith('.png')) {
      const input = path.join(dir, file);
      const output = path.join(dir, file.replace('.png', '.webp'));
      try {
        await sharp(input).webp({ quality: 80 }).toFile(output);
        console.log(`Converted ${file} to ${path.basename(output)}`);
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err.message);
      }
    }
  }
}

convert().catch(console.error);
