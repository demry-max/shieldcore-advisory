const sharp = require("sharp");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public", "images");

function headshot(initials, hue) {
  // Professional headshot placeholder — dark suit silhouette with initials
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 750">
    <defs>
      <linearGradient id="bg${hue}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:hsl(${hue},15%,14%)"/>
        <stop offset="100%" style="stop-color:hsl(${hue},15%,8%)"/>
      </linearGradient>
      <radialGradient id="spot${hue}" cx="50%" cy="35%">
        <stop offset="0%" style="stop-color:hsl(${hue},20%,22%);stop-opacity:1"/>
        <stop offset="100%" style="stop-color:hsl(${hue},15%,10%);stop-opacity:0"/>
      </radialGradient>
      <linearGradient id="suit${hue}" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:hsl(${hue},10%,18%)"/>
        <stop offset="100%" style="stop-color:hsl(${hue},10%,10%)"/>
      </linearGradient>
    </defs>
    <!-- Background -->
    <rect width="600" height="750" fill="url(#bg${hue})"/>
    <ellipse cx="300" cy="280" rx="350" ry="280" fill="url(#spot${hue})"/>

    <!-- Body / suit shoulders -->
    <ellipse cx="300" cy="820" rx="280" ry="240" fill="url(#suit${hue})"/>

    <!-- Neck -->
    <rect x="260" y="420" width="80" height="80" rx="10" fill="hsl(${hue},8%,28%)" opacity="0.6"/>

    <!-- Head shape -->
    <ellipse cx="300" cy="310" rx="110" ry="135" fill="hsl(${hue},8%,24%)" opacity="0.7"/>

    <!-- Shirt collar / tie area -->
    <polygon points="260,500 300,560 340,500" fill="hsl(0,0%,92%)" opacity="0.15"/>

    <!-- Suit lapels -->
    <polygon points="180,580 300,560 260,750" fill="hsl(${hue},10%,14%)" opacity="0.5"/>
    <polygon points="420,580 300,560 340,750" fill="hsl(${hue},10%,14%)" opacity="0.5"/>

    <!-- Initials overlay -->
    <text x="300" y="340" text-anchor="middle" font-family="Georgia,serif" font-size="${initials.length > 2 ? 72 : 90}" font-weight="600" fill="#c9a84c" opacity="0.35">${initials}</text>

    <!-- Subtle bottom fade -->
    <rect x="0" y="650" width="600" height="100" fill="url(#bg${hue})" opacity="0.8"/>

    <!-- Bottom gold accent line -->
    <line x1="200" y1="740" x2="400" y2="740" stroke="#c9a84c" stroke-width="2" opacity="0.3"/>
  </svg>`;
}

async function generate() {
  const founders = [
    { name: "team-demry", initials: "DC", hue: 42 },    // warm gold hue
    { name: "team-joma", initials: "JG", hue: 210 },    // cool blue hue
    { name: "team-james", initials: "JC", hue: 150 },   // teal/green hue
  ];

  for (const { name, initials, hue } of founders) {
    const svg = headshot(initials, hue);
    await sharp(Buffer.from(svg))
      .resize(600, 750)
      .jpeg({ quality: 90 })
      .toFile(path.join(publicDir, `${name}.jpg`));
    console.log(`Generated ${name}.jpg (${initials})`);
  }

  console.log("\nAll headshots generated!");
}

generate().catch(console.error);
