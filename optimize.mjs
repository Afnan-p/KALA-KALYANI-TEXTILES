import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function *walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

async function optimizeImages() {
  let totalOriginal = 0;
  let totalOptimized = 0;
  const report = [];

  for await (const file of walk(publicDir)) {
    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      // Don't convert favicon if it's named logo.png, wait, let's just convert it and update code.
      // But actually, index.html might need a png icon for standard support, let's keep logo.png as is, just copy it?
      // The instructions say "Convert all suitable PNG/JPG assets". Logo is a logo. I'll convert it but leave the original for the favicon, or just change the favicon to webp. Let's just convert everything.
      
      const newFile = file.substring(0, file.lastIndexOf('.')) + '.webp';
      const originalSize = fs.statSync(file).size;
      
      let quality = 80;
      if (file.includes('hero') || file.includes('about')) quality = 70;
      else if (file.includes('collections') || file.includes('gallery')) quality = 75;

      try {
        await sharp(file).webp({ quality, effort: 6 }).toFile(newFile);
        const optimizedSize = fs.statSync(newFile).size;
        
        totalOriginal += originalSize;
        totalOptimized += optimizedSize;
        
        report.push({
          file: path.relative(publicDir, file),
          original: (originalSize / 1024).toFixed(2) + ' KB',
          optimized: (optimizedSize / 1024).toFixed(2) + ' KB',
          reduction: ((1 - optimizedSize/originalSize) * 100).toFixed(1) + '%'
        });

        // if it's the logo, let's keep the original for favicon just in case, but delete the rest.
        if (path.basename(file) !== 'logo.png') {
          fs.unlinkSync(file);
        }
        
      } catch (e) {
        console.error(`Error optimizing ${file}:`, e);
      }
    }
  }

  console.log("=== IMAGE OPTIMIZATION REPORT ===");
  console.table(report);
  console.log(`Total Original Size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Optimized Size: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Bandwidth Reduction: ${((1 - totalOptimized/totalOriginal) * 100).toFixed(1)}%`);
}

optimizeImages();
