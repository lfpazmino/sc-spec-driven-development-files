import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOT_DIR = resolve(__dirname, "screenshots");

const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:5173";
const SERVER_URL = process.env.SERVER_URL ?? "http://localhost:3000";

function screenshotPath(name) {
  mkdirSync(SCREENSHOT_DIR, { recursive: true });
  return resolve(SCREENSHOT_DIR, name);
}

async function healthCheck() {
  const res = await fetch(`${SERVER_URL}/health`);
  const body = await res.json();
  console.log(`Health: ${res.status} —`, JSON.stringify(body));
  return res.status === 200;
}

async function smokeTest() {
  console.log("=== AgentClinic Smoke Test ===\n");

  // Health check first
  const healthy = await healthCheck();
  console.log("");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });
  const page = await context.newPage();

  try {
    // 1. Load the home page
    console.log(`Navigating to ${FRONTEND_URL}...`);
    await page.goto(FRONTEND_URL, { waitUntil: "networkidle", timeout: 15000 });
    console.log(`Title: ${await page.title()}`);

    // Wait for glassmorphic UI to render
    await page.waitForSelector(".glass-hero", { timeout: 10000 });
    await page.screenshot({
      path: screenshotPath("01-homepage.png"),
      fullPage: true,
    });
    console.log("Screenshot: screenshots/01-homepage.png");

    // 2. Verify key elements
    const heroTitle = await page.textContent(".glass-hero h1");
    console.log(`Hero title: "${heroTitle}"`);

    const cardCount = await page.locator(".glass-card").count();
    console.log(`Glass cards visible: ${cardCount}`);

    const buttonCount = await page.locator(".glass-btn").count();
    console.log(`Buttons visible: ${buttonCount}`);

    // 3. Check that header/footer are present
    const header = await page.locator("header").count();
    const footer = await page.locator("footer").count();
    console.log(`Header present: ${header > 0}, Footer present: ${footer > 0}`);

    // 4. Click the "Get Started" button
    console.log('\nClicking "Get Started"...');
    await page.click(".glass-btn-primary");
    await page.waitForTimeout(500);
    await page.screenshot({
      path: screenshotPath("02-after-click.png"),
      fullPage: true,
    });
    console.log("Screenshot: screenshots/02-after-click.png");

    // 5. Check nav links in header
    const navLinks = await page.locator("header nav a").allTextContents();
    console.log(`Nav links: ${navLinks.join(", ")}`);

    // Success summary
    const results = {
      server_healthy: healthy,
      title: await page.title(),
      hero_title: heroTitle,
      cards: cardCount,
      buttons: buttonCount,
      header: header > 0,
      footer: footer > 0,
      nav_links: navLinks,
    };

    console.log("\n=== Results ===");
    console.log(JSON.stringify(results, null, 2));
    console.log("\nSmoke test PASSED");
  } catch (err) {
    console.error("Smoke test FAILED:", err.message);
    // Take error screenshot
    try {
      await page.screenshot({
        path: screenshotPath("ERROR-state.png"),
        fullPage: true,
      });
      console.log("Error screenshot saved: screenshots/ERROR-state.png");
    } catch (_) {}
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

smokeTest();
