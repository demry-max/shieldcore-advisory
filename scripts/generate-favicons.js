const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const publicDir = path.join(__dirname, "..", "public");

// SVG favicon with shield + S monogram
const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#dfc06e"/>
      <stop offset="100%" style="stop-color:#a88a3a"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="#0a0a0f"/>
  <path d="M256 62 L410 138 L410 290 C410 376 344 432 256 466 C168 432 102 376 102 290 L102 138 Z"
        fill="none" stroke="url(#shieldGrad)" stroke-width="18" stroke-linejoin="round"/>
  <path d="M256 108 L378 168 L378 284 C378 350 326 398 256 426 C186 398 134 350 134 284 L134 168 Z"
        fill="#c9a84c" opacity="0.1"/>
  <text x="256" y="318" text-anchor="middle" font-family="Georgia,serif" font-size="210" font-weight="700" fill="#c9a84c">S</text>
</svg>`;

async function generate() {
  const svgBuffer = Buffer.from(svgFavicon);

  // Generate PNG favicons at different sizes
  const sizes = [16, 32, 180, 192, 512];
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
    console.log(`Generated favicon-${size}x${size}.png`);
  }

  // Copy 32x32 as favicon.ico replacement (browsers accept PNG)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, "favicon.png"));

  // Apple touch icon
  fs.copyFileSync(
    path.join(publicDir, "favicon-180x180.png"),
    path.join(publicDir, "apple-touch-icon.png")
  );

  // OG image (1200x630)
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0a0a0f"/>
        <stop offset="100%" style="stop-color:#12121c"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <line x1="0" y1="0" x2="1200" y2="0" stroke="#c9a84c" stroke-width="4"/>
    <line x1="0" y1="630" x2="1200" y2="630" stroke="#c9a84c" stroke-width="4"/>
    <path d="M200 140 L280 170 L280 250 C280 290 250 310 200 326 C150 310 120 290 120 250 L120 170 Z"
          fill="none" stroke="#c9a84c" stroke-width="6" stroke-linejoin="round" opacity="0.8"/>
    <text x="200" y="268" text-anchor="middle" font-family="Georgia,serif" font-size="80" font-weight="700" fill="#c9a84c">S</text>
    <text x="320" y="220" font-family="Georgia,serif" font-size="48" font-weight="600" fill="#f5f0e8">ShieldCore</text>
    <text x="320" y="265" font-family="Arial,sans-serif" font-size="18" font-weight="600" fill="#c9a84c" letter-spacing="6">ADVISORY</text>
    <line x1="100" y1="340" x2="1100" y2="340" stroke="#2a2a3a" stroke-width="1"/>
    <text x="600" y="410" text-anchor="middle" font-family="Georgia,serif" font-size="38" fill="#f5f0e8">Protect Your Wealth</text>
    <text x="600" y="460" text-anchor="middle" font-family="Georgia,serif" font-size="38" fill="#c9a84c">Before Problems Begin</text>
    <text x="600" y="540" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#8a8a9a">Business Structuring · Risk Advisory · Asset Protection · Tax Optimization</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(publicDir, "og-image.png"));
  console.log("Generated og-image.png");

  console.log("All favicons generated!");
}

generate().catch(console.error);
