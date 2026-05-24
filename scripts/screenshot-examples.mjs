import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../public/examples");

const TARGETS = [
  {
    url: "https://brooks-plumbing-services.vercel.app/",
    out: "brooks-plumbing.png",
  },
  {
    url: "https://chen-electrical-solutions.vercel.app/",
    out: "chen-electrical.png",
  },
  {
    url: "https://martinez-roofing-and-repairs.vercel.app/",
    out: "martinez-roofing.png",
  },
];

await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
  defaultViewport: { width: 1280, height: 800, deviceScaleFactor: 1 },
});

for (const { url, out } of TARGETS) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
  console.log(`Navigating to ${url} …`);
  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
  } catch {
    // networkidle2 timeout — still try to screenshot whatever loaded
    console.warn(`  ⚠ networkidle2 timed out, screenshotting anyway`);
  }
  const dest = resolve(outDir, out);
  await page.screenshot({ path: dest, fullPage: false });
  console.log(`  ✓ saved → public/examples/${out}`);
  await page.close();
}

await browser.close();
console.log("Done.");
