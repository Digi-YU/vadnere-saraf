import { copyFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const sourceDir = resolve(__dirname, '../public/assets');
const targetDir = resolve(__dirname, '../dist/assets');

try {
  mkdirSync(targetDir, { recursive: true });
  copyFileSync(
    resolve(sourceDir, 'pexels-vikashkr50-27155540.jpg'),
    resolve(targetDir, 'pexels-vikashkr50-27155540.jpg')
  );
  // Add other images as needed
  console.log('Assets copied successfully');
} catch (err) {
  console.error('Error copying assets:', err);
} 