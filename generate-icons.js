// Simple script to copy the base icon to all required sizes
// In production, you'd use a proper image resizing tool
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceIcon = path.join(__dirname, 'public', 'icons', 'icon-512x512.png');

sizes.forEach(size => {
    const targetIcon = path.join(__dirname, 'public', 'icons', `icon-${size}x${size}.png`);
    if (size === 512) return; // Skip the source file

    // For now, just copy the 512x512 icon
    // In production, use sharp or similar to actually resize
    fs.copyFileSync(sourceIcon, targetIcon);
    console.log(`Created ${size}x${size} icon`);
});

console.log('All icons created! Note: These are copies. Use an image tool to properly resize them.');
