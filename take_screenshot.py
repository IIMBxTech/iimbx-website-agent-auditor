import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1920, "height": 1080})
        await page.goto("http://localhost:8765/prototypes/adm_v1_variant_3.html")
        await page.screenshot(path="C:/Users/harsh/.gemini/antigravity/brain/92a2e1bb-b87c-4170-8573-1583d664e382/adm_hero.png")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
