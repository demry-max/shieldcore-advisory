const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const publicDir = path.join(__dirname, "..", "public", "images");
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

async function generateAll() {
  // 1. Hero background — dark architectural grid with gold accents
  const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
    <defs>
      <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0a0a0f"/>
        <stop offset="50%" style="stop-color:#0d1020"/>
        <stop offset="100%" style="stop-color:#0a0a0f"/>
      </linearGradient>
      <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#c9a84c;stop-opacity:0"/>
        <stop offset="50%" style="stop-color:#c9a84c;stop-opacity:0.3"/>
        <stop offset="100%" style="stop-color:#c9a84c;stop-opacity:0"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="40%">
        <stop offset="0%" style="stop-color:#c9a84c;stop-opacity:0.06"/>
        <stop offset="100%" style="stop-color:#c9a84c;stop-opacity:0"/>
      </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#heroBg)"/>
    <circle cx="960" cy="400" r="500" fill="url(#glow)"/>
    ${Array.from({length: 24}, (_, i) => `<line x1="${i * 80}" y1="0" x2="${i * 80}" y2="1080" stroke="#c9a84c" stroke-width="0.5" opacity="0.04"/>`).join("")}
    ${Array.from({length: 14}, (_, i) => `<line x1="0" y1="${i * 80}" x2="1920" y2="${i * 80}" stroke="#c9a84c" stroke-width="0.5" opacity="0.04"/>`).join("")}
    <line x1="0" y1="540" x2="1920" y2="540" stroke="url(#goldLine)" stroke-width="1"/>
    <path d="M860 300 L960 250 L1060 300 L1060 450 C1060 520 1020 560 960 590 C900 560 860 520 860 450 Z" fill="none" stroke="#c9a84c" stroke-width="1.5" opacity="0.08"/>
    <path d="M880 320 L960 280 L1040 320 L1040 430 C1040 490 1010 530 960 555 C910 530 880 490 880 430 Z" fill="#c9a84c" opacity="0.02"/>
  </svg>`;
  await sharp(Buffer.from(heroSvg)).resize(1920, 1080).jpeg({ quality: 85 }).toFile(path.join(publicDir, "hero-bg.jpg"));
  console.log("Generated hero-bg.jpg");

  // 2. Manila skyline silhouette for Philippines section
  const manilaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400">
    <defs>
      <linearGradient id="skyBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#0d1b2a"/>
        <stop offset="100%" style="stop-color:#0a0a0f"/>
      </linearGradient>
      <linearGradient id="buildGold" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#c9a84c;stop-opacity:0.15"/>
        <stop offset="100%" style="stop-color:#c9a84c;stop-opacity:0.03"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="400" fill="url(#skyBg)"/>
    <rect x="80" y="180" width="60" height="220" fill="url(#buildGold)" rx="2"/>
    <rect x="160" y="120" width="50" height="280" fill="url(#buildGold)" rx="2"/>
    <rect x="230" y="160" width="70" height="240" fill="url(#buildGold)" rx="2"/>
    <rect x="320" y="80" width="55" height="320" fill="url(#buildGold)" rx="2"/>
    <rect x="395" y="140" width="65" height="260" fill="url(#buildGold)" rx="2"/>
    <rect x="480" y="60" width="50" height="340" fill="url(#buildGold)" rx="2"/>
    <rect x="550" y="100" width="80" height="300" fill="url(#buildGold)" rx="2"/>
    <rect x="650" y="50" width="60" height="350" fill="url(#buildGold)" rx="2"/>
    <rect x="730" y="90" width="55" height="310" fill="url(#buildGold)" rx="2"/>
    <rect x="805" y="130" width="70" height="270" fill="url(#buildGold)" rx="2"/>
    <rect x="895" y="70" width="50" height="330" fill="url(#buildGold)" rx="2"/>
    <rect x="965" y="150" width="65" height="250" fill="url(#buildGold)" rx="2"/>
    <rect x="1050" y="110" width="55" height="290" fill="url(#buildGold)" rx="2"/>
    <line x1="0" y1="399" x2="1200" y2="399" stroke="#c9a84c" stroke-width="1" opacity="0.2"/>
  </svg>`;
  await sharp(Buffer.from(manilaSvg)).resize(1200, 400).png().toFile(path.join(publicDir, "manila-skyline.png"));
  console.log("Generated manila-skyline.png");

  // 3. Stats/trust section background
  const statsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
    <rect width="1200" height="600" fill="#0a0a0f"/>
    <circle cx="200" cy="300" r="250" fill="#c9a84c" opacity="0.02"/>
    <circle cx="1000" cy="300" r="250" fill="#c9a84c" opacity="0.02"/>
    ${Array.from({length: 15}, (_, i) => `<line x1="${i * 80}" y1="0" x2="${i * 80}" y2="600" stroke="#c9a84c" stroke-width="0.3" opacity="0.05"/>`).join("")}
    ${Array.from({length: 8}, (_, i) => `<line x1="0" y1="${i * 80}" x2="1200" y2="${i * 80}" stroke="#c9a84c" stroke-width="0.3" opacity="0.05"/>`).join("")}
  </svg>`;
  await sharp(Buffer.from(statsSvg)).resize(1200, 600).jpeg({ quality: 80 }).toFile(path.join(publicDir, "stats-bg.jpg"));
  console.log("Generated stats-bg.jpg");

  // 4. Abstract shield pattern for CTA background
  const ctaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
    <defs>
      <radialGradient id="ctaGlow" cx="50%" cy="50%">
        <stop offset="0%" style="stop-color:#c9a84c;stop-opacity:0.05"/>
        <stop offset="100%" style="stop-color:#c9a84c;stop-opacity:0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="600" fill="#0a0a0f"/>
    <circle cx="600" cy="300" r="350" fill="url(#ctaGlow)"/>
    <path d="M500 100 L600 60 L700 100 L700 300 C700 400 660 440 600 470 C540 440 500 400 500 300 Z" fill="none" stroke="#c9a84c" stroke-width="1" opacity="0.06"/>
    <path d="M520 120 L600 85 L680 120 L680 290 C680 380 645 415 600 442 C555 415 520 380 520 290 Z" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.04"/>
    <path d="M540 140 L600 110 L660 140 L660 280 C660 360 630 390 600 414 C570 390 540 360 540 280 Z" fill="#c9a84c" opacity="0.015"/>
  </svg>`;
  await sharp(Buffer.from(ctaSvg)).resize(1200, 600).jpeg({ quality: 80 }).toFile(path.join(publicDir, "cta-bg.jpg"));
  console.log("Generated cta-bg.jpg");

  // 5. Team placeholder images — professional abstract avatars
  const colors = [
    { name: "demry", accent: "#c9a84c", letter: "D" },
    { name: "joma", accent: "#8aacc9", letter: "J" },
    { name: "james", accent: "#9ac98a", letter: "JA" },
  ];
  for (const { name, accent, letter } of colors) {
    const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="av" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a24"/>
          <stop offset="100%" style="stop-color:#12121c"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#av)"/>
      <circle cx="200" cy="200" r="120" fill="none" stroke="${accent}" stroke-width="2" opacity="0.2"/>
      <circle cx="200" cy="200" r="80" fill="${accent}" opacity="0.08"/>
      <text x="200" y="218" text-anchor="middle" font-family="Georgia,serif" font-size="${letter.length > 1 ? 60 : 80}" font-weight="600" fill="${accent}" opacity="0.7">${letter}</text>
    </svg>`;
    await sharp(Buffer.from(avatarSvg)).resize(400, 400).jpeg({ quality: 85 }).toFile(path.join(publicDir, `team-${name}.jpg`));
    console.log(`Generated team-${name}.jpg`);
  }

  // 6. Service icon backgrounds
  const serviceBgSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="#12121c"/>
    <circle cx="300" cy="200" r="180" fill="#c9a84c" opacity="0.02"/>
    <circle cx="300" cy="200" r="100" fill="#c9a84c" opacity="0.03"/>
  </svg>`;
  await sharp(Buffer.from(serviceBgSvg)).resize(600, 400).jpeg({ quality: 80 }).toFile(path.join(publicDir, "service-bg.jpg"));
  console.log("Generated service-bg.jpg");

  console.log("\nAll images generated successfully!");
}

generateAll().catch(console.error);
