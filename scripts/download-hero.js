const https = require("https");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = path.join(__dirname, "..", "public", "images");

// Unsplash free image — Manila/BGC skyline at dusk (dark, moody, professional)
// Using Unsplash Source API for a free architectural/skyline image
const imageUrl = "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=1920&q=80&auto=format";

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function main() {
  console.log("Downloading hero image from Unsplash...");
  try {
    const buffer = await download(imageUrl);
    console.log(`Downloaded ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);

    // Process: darken, add blue/dark tint, resize
    const processed = await sharp(buffer)
      .resize(1920, 1080, { fit: "cover" })
      .modulate({ brightness: 0.3, saturation: 0.4 })
      .tint({ r: 10, g: 12, b: 25 })
      .jpeg({ quality: 85 })
      .toFile(path.join(publicDir, "hero-bg.jpg"));

    console.log("Generated darkened hero-bg.jpg");
  } catch (err) {
    console.error("Failed to download, generating fallback...", err.message);
    // Fallback: generate a premium abstract background
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#080812"/>
          <stop offset="30%" style="stop-color:#0a0e1a"/>
          <stop offset="70%" style="stop-color:#0c0a14"/>
          <stop offset="100%" style="stop-color:#060610"/>
        </linearGradient>
        <radialGradient id="g1" cx="30%" cy="40%">
          <stop offset="0%" style="stop-color:#c9a84c;stop-opacity:0.06"/>
          <stop offset="100%" style="stop-color:#c9a84c;stop-opacity:0"/>
        </radialGradient>
        <radialGradient id="g2" cx="70%" cy="60%">
          <stop offset="0%" style="stop-color:#1a2a4a;stop-opacity:0.3"/>
          <stop offset="100%" style="stop-color:#1a2a4a;stop-opacity:0"/>
        </radialGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#bg)"/>
      <ellipse cx="576" cy="432" rx="600" ry="400" fill="url(#g1)"/>
      <ellipse cx="1344" cy="648" rx="500" ry="350" fill="url(#g2)"/>
      ${Array.from({length: 25}, (_, i) => `<line x1="${i*80}" y1="0" x2="${i*80}" y2="1080" stroke="#c9a84c" stroke-width="0.4" opacity="0.04"/>`).join("")}
      ${Array.from({length: 14}, (_, i) => `<line x1="0" y1="${i*80}" x2="1920" y2="${i*80}" stroke="#c9a84c" stroke-width="0.4" opacity="0.04"/>`).join("")}
      <!-- Diagonal accent lines -->
      <line x1="0" y1="400" x2="1920" y2="200" stroke="#c9a84c" stroke-width="0.5" opacity="0.05"/>
      <line x1="0" y1="700" x2="1920" y2="500" stroke="#c9a84c" stroke-width="0.5" opacity="0.04"/>
      <line x1="0" y1="900" x2="1920" y2="800" stroke="#1a2a4a" stroke-width="0.8" opacity="0.1"/>
      <!-- Subtle building silhouettes at bottom -->
      <rect x="100" y="880" width="80" height="200" fill="#0d1020" rx="2"/>
      <rect x="200" y="820" width="60" height="260" fill="#0c0e1a" rx="2"/>
      <rect x="280" y="860" width="100" height="220" fill="#0d1020" rx="2"/>
      <rect x="400" y="780" width="70" height="300" fill="#0b0d18" rx="2"/>
      <rect x="490" y="840" width="90" height="240" fill="#0d1020" rx="2"/>
      <rect x="600" y="760" width="65" height="320" fill="#0c0e1a" rx="2"/>
      <rect x="690" y="800" width="110" height="280" fill="#0d1222" rx="2"/>
      <rect x="820" y="750" width="75" height="330" fill="#0b0d18" rx="2"/>
      <rect x="920" y="810" width="85" height="270" fill="#0d1020" rx="2"/>
      <rect x="1030" y="770" width="60" height="310" fill="#0c0e1a" rx="2"/>
      <rect x="1110" y="830" width="95" height="250" fill="#0d1020" rx="2"/>
      <rect x="1230" y="790" width="70" height="290" fill="#0b0d18" rx="2"/>
      <rect x="1320" y="850" width="80" height="230" fill="#0d1222" rx="2"/>
      <rect x="1420" y="800" width="65" height="280" fill="#0c0e1a" rx="2"/>
      <rect x="1510" y="760" width="90" height="320" fill="#0d1020" rx="2"/>
      <rect x="1620" y="820" width="75" height="260" fill="#0b0d18" rx="2"/>
      <rect x="1720" y="870" width="100" height="210" fill="#0d1222" rx="2"/>
      <!-- Tiny window lights -->
      ${Array.from({length: 40}, () => {
        const x = 100 + Math.floor(Math.random() * 1700);
        const y = 770 + Math.floor(Math.random() * 200);
        return `<rect x="${x}" y="${y}" width="3" height="4" fill="#c9a84c" opacity="${(0.05 + Math.random() * 0.15).toFixed(2)}"/>`;
      }).join("")}
    </svg>`;
    await sharp(Buffer.from(svg)).resize(1920, 1080).jpeg({ quality: 90 }).toFile(path.join(publicDir, "hero-bg.jpg"));
    console.log("Generated fallback hero-bg.jpg with skyline");
  }
}

main();
