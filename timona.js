const puppeteer = require('puppeteer');

(async () => {

  const mang =  [
    { "name" : "timona noi mi" , "link" : 0 },
    { "name" : "timona phun xam" , "link" : 2 },
     { "name" : "timona dieu tri da" , "link" : 0 },
    { "name" : "timona dieu tri da nang cao" , "link" : 0 },
    { "name" : "timona chu spa " , "link" : 1 },
   { "name" : "timona hoc nghe spa" , "link" : 1 },
    { "name" : "chi phi hoc nghe spa" , "link" : 7 }
   //{ "name" : "taza spa trị nám" , "link" : 2 }
   ] 

for(;;)
{
  await page.waitForTimeout(3000);
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation()
  page.setViewport({ width: 1280, height:720 });

  const random = Math.floor(Math.random() * mang.length);  
  //console.log(mang[random].name) ;
  await page.goto('https://www.google.com/', { waitUntil: 'networkidle2' });
  await page.waitForSelector('.gLFyf');
  await page.type('.gLFyf', mang[random].name);
  await page.keyboard.press('Enter');
  await navigationPromise;
  await page.waitForSelector('.yuRUbf')
  const pullovers = await page.$$('.yuRUbf')
  await page.waitForSelector('.yuRUbf')
  await pullovers[mang[random].link].click()
  await page.waitForTimeout(3000);
  await autoScroll(page);
   await page.waitForTimeout(3000);
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