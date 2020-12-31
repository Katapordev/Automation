const puppeteer = require('puppeteer');

(async () => {

for(;;)
{

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  //await page.waitForTimeout(3000);
  const navigationPromise = page.waitForNavigation()
  page.setViewport({ width: 1280, height:720 });

  //const random = Math.floor(Math.random() * mang.length);  
  //console.log(mang[random].name) ;
  await page.goto('https://www.youtube.com/', { waitUntil: 'networkidle2' });
  await page.type('input#search', 'timona academy');
  await page.click('button#search-icon-legacy');
  await page.waitForSelector('[href="/watch?v=uMMRoWt7qWM"]');
  await page.click('[href="/watch?v=uMMRoWt7qWM"]');
  await page.waitForTimeout(30000);
  await page.click('.more-button');
  await page.waitForSelector('#description a');
  await page.click('#description a');
  await autoScroll(page);
  await page.waitForTimeout(30000);
  //await page.keyboard.press('Enter');
  // await page.waitForSelector('.gLFyf');
  // await page.type('.gLFyf', mang[random].name);
  // await page.keyboard.press('Enter');
  // await navigationPromise;
  // await page.waitForSelector('.yuRUbf')
  // const pullovers = await page.$$('.yuRUbf')
  // await page.waitForSelector('.yuRUbf')
  // await pullovers[mang[random].link].click()
  // await page.waitForTimeout(3000);
  // await autoScroll(page);
  //  await page.waitForTimeout(3000);
    await browser.close();  
   }
})();
async function autoScroll(page){
  await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 100;
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight){
                  clearInterval(timer);
                  resolve();
              }
          }, 300);
      });
  });
}