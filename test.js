const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation()
    page.setViewport({ width: 1280, height:720 });
    await page.goto('https://trix-editor.org/')
    await page.focus('trix-editor')
    await page.keyboard.type('Just adding a title')
    await page.screenshot({ path: 'keyboard.png' })
    await browser.close()
   })()