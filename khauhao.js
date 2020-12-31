const puppeteer = require('puppeteer');
const fs = require("fs");
const mysql = require('mysql');

const request = require('request');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation()
  page.setViewport({ width: 1280, height:720 });
  await page.goto('https://vttechsolution.vn:8056/Views/Login/Login.html?ver=1.2.0.2', { waitUntil: 'networkidle2' });
  await page.type('input[name="username"]', 'chikiet');
  await page.type('input[name="pass"]', '@hikiet88');
  await page.click('.login100-form-btn');
  await navigationPromise;

  
  await page.waitForSelector('input[id="fitlerMenu"]');
  await page.type('input[id="fitlerMenu"]', 'dich vu');
  await page.waitForSelector('a[data-search="dich vu"]');
  await page.click('a[data-search="dich vu"]');
  await page.waitForSelector('tr[data-id="48"]');
  await page.waitForSelector('input[id="filterService"]');
  await page.type('input[id="filterService"]', 'Căng chỉ tạo hình khuôn mặt toàn diện BAO ĐẸP - BH 10 năm');
  await page.waitForSelector('#dtContentService a.buttonEditClass');
  await page.click('#dtContentService a.buttonEditClass');
 // const [button] = await page.$x("//tr[@data-id='48']/td[contains(., '48')]");
 //let element = await page.$('tr[data-id="48"] td:first-child');
 //await element.click('tr[data-id="48"] td:first-child');


 //await page.type('#filterService', 'ULTHERAPY TOÀN MẶT');
 var count = 0;
//var cn = [1,2,3,4,6,7,13];
var cn = [1];
console.log(cn.length);
//  for(var i=0;i<cn.length;i++)
//  {
// await page.waitForTimeout(10000);
// await page.waitForSelector('#BranchID');
// await page.click('#BranchID');
// await page.waitForSelector('#cbbBranch div[data-value="'+cn[i]+'"]');
// await page.click('#cbbBranch div[data-value="'+cn[i]+'"]');
// try {
//   await page.waitForSelector('#dtContentCustomerListFilerBody tr',{timeout: 5000});
//   console.log('Found visible Element')
// } catch (e) {
//   console.log('Could NOT find a visible element ', e.message)
// }

//   const lhs = await page.evaluate(() => {
//     let trs = document.querySelectorAll("#dtContentCustomerListFilerBody tr");
//     return trs.length
//    // let links = [];
//     //let links2 = [];
//     // trs.forEach(item => {
//     //   var links1 = [];
//     //     let tds= item.querySelectorAll('td');
//     //       tds.forEach(function(value, index) {
//     //         switch(index) {
//     //           case 3:
//     //            let value1 = value.querySelector('a');
//     //            value  = value.textContent.trim().replace(value1.textContent.trim(),'');
//     //             links1.push('"Field1":"'+value+'"');
//     //           break;             
//     //             case 4:
//     //             links1.push('"Field2":"'+value.textContent.trim()+'"');
//     //             break;
//     //             case 7:links1.push('"Field3":"'+value.textContent.trim()+'"'); break;
//     //             case 8:links1.push('"Field4":"'+value.textContent.trim()+'"'); break; 
//     //             case 9:links1.push('"Field5":"'+value.textContent.trim()+'"'); break;
//     //             case 10:links1.push('"Field6":"'+value.textContent.trim()+'"'); break;
//     //             case 11:links1.push('"Field7":"'+value.textContent.trim()+'"'); break;
//     //             case 12:links1.push('"Field8":"'+value.textContent.trim()+'"'); break;
//     //             case 13:links1.push('"Field9":"'+value.textContent.trim()+'"'); break;
//     //             case 14:links1.push('"Field10":"'+value.textContent.trim()+'"');
//     //             links1.push('"Field11":"15-11-2020"'); break;
//     //          }
//     //       }
//     //     )
//     //     links.push('{'+links1+'}');
//     // });
//     //links2.push('['+links+']');
//    // return links;
//   });
//  console.log(lhs); 
//   //count += lhs.length;

// // lhs.forEach(function(value, index){
// //     FieldsCreate(value);
// // });

//  }
 console.log(count);

})();