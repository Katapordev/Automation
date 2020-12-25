const puppeteer = require('puppeteer');
const fs = require("fs");
const mysql = require('mysql');
const request = require('request');
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation()
  page.setViewport({ width: 1280, height:720 });
  const mang =  [
    // { "name" : "báo chí nói về taza spa" , "link" : 0 },
     { "name" : "taza spa triệt lông" , "link" : 0 },
     { "name" : "taza spa tri mun" , "link" : 0 },
     { "name" : "cang chi taza spa" , "link" : 0 },
     { "name" : "taza spa baby face" , "link" : 0 },
    { "name" : "taza spa sẹo rỗ" , "link" : 0 },
    { "name" : "taza spa huy mo" , "link" : 0 },
    { "name" : "taza spa trị nám" , "link" : 1 }
   
  
    ] 
 for(;;)
 {
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