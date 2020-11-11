const puppeteer = require('puppeteer');
const fs = require("fs");
const mysql = require('mysql');

const request = require('request');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   const navigationPromise = page.waitForNavigation()
//   page.setViewport({ width: 1280, height:720 });
//   await page.goto('https://vttechsolution.vn:8056/Views/Login/Login.html?ver=1.2.0.2', { waitUntil: 'networkidle2' });
//   await page.type('input[name="username"]', 'chikiet');
//   await page.type('input[name="pass"]', '@hikiet88');
//   await page.click('.login100-form-btn');
//   await navigationPromise;
//   await page.waitForSelector('input[id="fitlerMenu"]');
//   await page.type('input[id="fitlerMenu"]', 'danh sach');
//  await page.waitForSelector('a[data-search="danh sach"]');
//  await page.click('a[data-search="danh sach"]'); 
// //   const lhs = await page.evaluate(() => {
// //     let trs = document.querySelectorAll("div");
// //     return trs;
// //   });
// // console.log(lhs);


//  // await page.waitForSelector('a[data-search="danh sach"]');
//  // await page.click('a[data-search="danh sach"]'); 

// //   await navigationPromise;

// //   await page.waitForSelector('#ScheduleStatus');
// //   await page.click('#ScheduleStatus');

// //   await page.waitForSelector('#cbbAppoinmentStatus div[data-value="6"]');
// //   await page.click('#cbbAppoinmentStatus div[data-value="6"]');


// //   await page.waitForSelector('#date');
// //   await page.click('#date');

// // //   //await page.waitForSelector('.flatpickr-prev-month');
// // //   //await page.click('.flatpickr-prev-month');

// //   await page.waitForSelector('span[aria-label="November 2, 2020"]');
// //   await page.click('span[aria-label="November 2, 2020"]');
// //   await page.waitForSelector('#date');
// //   await page.click('#date');
// //   await page.waitForSelector('span[aria-label="November 2, 2020"]');
// //   await page.click('span[aria-label="November 2, 2020"]');
// //   await page.waitForSelector('span[aria-label="November 2, 2020"]');
// //   await page.click('span[aria-label="November 2, 2020"]');



//   // await page.waitForSelector('#ScheduleStatus');
//   // await page.click('#ScheduleStatus');

//   // await page.waitForSelector('#cbbAppoinmentStatus div[data-value="3"]');
//   // await page.click('#cbbAppoinmentStatus div[data-value="3"]');
//   await page.waitForSelector('#dtContentCustomerListFilerBody tr');
//   const lhs = await page.evaluate(() => {
//     let trs = document.querySelectorAll("#dtContentCustomerListFilerBody tr");
//     let links = [];
//     let links2 = [];
//     trs.forEach(item => {
//       var links1 = [];
//         let tds= item.querySelectorAll('td');
//           tds.forEach(function(value, index) {
//             switch(index) {
//               case 3:
//                let value1 = value.querySelector('a');
//                value  = value.textContent.trim().replace(value1.textContent.trim(),'');
//                 links1.push('"field1":"'+value+'"');
//               break;             
//                 case 4:
//                 links1.push('"field2":"'+value.textContent.trim()+'"');
//                 break;
//                 case 7:links1.push('"field3":"'+value.textContent.trim()+'"'); break;
//                 case 8:links1.push('"field4":"'+value.textContent.trim()+'"'); break; 
//                 case 9:links1.push('"field5":"'+value.textContent.trim()+'"'); break;
//                 case 10:links1.push('"field6":"'+value.textContent.trim()+'"'); break;
//                 case 11:links1.push('"field7":"'+value.textContent.trim()+'"'); break;
//                 case 12:links1.push('"field8":"'+value.textContent.trim()+'"'); break;
//                 case 13:links1.push('"field9":"'+value.textContent.trim()+'"'); break;
//                 case 14:links1.push('"field10":"'+value.textContent.trim()+'"'); break;
                
              
//             //       case 4:
//             //         links1.push('"field4":"'+value.textContent.trim());
//             //         break;                                               
//             //   case 6:
//             //       links1.push(value.textContent.trim());
//             //       break;                
//             // //   case 8:
//             // //     let value1 = value.querySelector('span:first-child');
//             // //     let value2 = value.querySelector('span:last-child');
//             // //     links1.push('"field2":"'+value1.textContent.trim()+'"');
//             // //     links1.push('"field3":"'+value2.textContent.trim()+'"');
//             // //     break;
//             // //   case 9:
//             // //     links1.push('"field4":"'+value.textContent.trim()+'"');
//             // //       break; 
//             // //    case 11:
//             // //     links1.push('"field5":"'+value.querySelector('span:first-child').textContent.trim()+'"');
//             // //        break;                              
//             //   default:
//             //     // code block
//              }
//           }
//         )
//       links.push(links1);
//     });
//     //links2.push('['+links+']');
//     return links;
//   });
// console.log(lhs);

// //   const data = await page.evaluate(() => {
// //     let trs = document.querySelectorAll("#dtContentAppointmentByDayListBody tr");
// //     let links = [];
// //     let links2 = [];
// //     trs.forEach(item => {
// //       var links1 = [];
// //         let tds= item.querySelectorAll('td');
// //           tds.forEach(function(value, index) {
// //             switch(index) {
// //             //   case 4:
// //             //     links1.push('"field6":"'+value.querySelector('span:first-child').textContent.trim()+'"');
// //             //        break;             
// //               case 6:
// //                 links1.push('"field1":"'+value.textContent.trim()+'"');
// //                 break;
// //             //   case 8:
// //             //     let value1 = value.querySelector('span:first-child');
// //             //     let value2 = value.querySelector('span:last-child');
// //             //     links1.push('"field2":"'+value1.textContent.trim()+'"');
// //             //     links1.push('"field3":"'+value2.textContent.trim()+'"');
// //             //     break;
// //             //   case 9:
// //             //     links1.push('"field4":"'+value.textContent.trim()+'"');
// //             //       break; 
// //             //    case 11:
// //             //     links1.push('"field5":"'+value.querySelector('span:first-child').textContent.trim()+'"');
// //             //        break;                              
// //               default:
// //                 // code block
// //             }
// //           }
// //         )
// //       links.push('{'+links1+'}');
// //     });
// //     //links2.push('['+links+']');
// //     return links;
// //   });

// browser.close();

// })();

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
  await page.type('input[id="fitlerMenu"]', 'danh sach');
 await page.waitForSelector('a[data-search="danh sach"]');
 await page.click('a[data-search="danh sach"]'); 
  var cn = [1,2,3,4,6,7,13];
 for(var i=0;i<cn.length;i++)
 {
await page.waitForTimeout(5000);
await page.waitForSelector('#BranchID');
await page.click('#BranchID');
await page.waitForSelector('#cbbBranch div[data-value="'+cn[i]+'"]');
await page.click('#cbbBranch div[data-value="'+cn[i]+'"]');
try {
  await page.waitForSelector('#dtContentCustomerListFilerBody tr',{timeout: 5000});
  console.log('Found visible Element')
} catch (e) {
  console.log('Could NOT find a visible element ', e.message)
}

  const lhs = await page.evaluate(() => {
    let trs = document.querySelectorAll("#dtContentCustomerListFilerBody tr");
    let links = [];
    let links2 = [];
    trs.forEach(item => {
      var links1 = [];
        let tds= item.querySelectorAll('td');
          tds.forEach(function(value, index) {
            switch(index) {
              case 3:
               let value1 = value.querySelector('a');
               value  = value.textContent.trim().replace(value1.textContent.trim(),'');
                links1.push('"field1":"'+value+'"');
              break;             
                case 4:
                links1.push('"field2":"'+value.textContent.trim()+'"');
                break;
                case 7:links1.push('"field3":"'+value.textContent.trim()+'"'); break;
                case 8:links1.push('"field4":"'+value.textContent.trim()+'"'); break; 
                case 9:links1.push('"field5":"'+value.textContent.trim()+'"'); break;
                case 10:links1.push('"field6":"'+value.textContent.trim()+'"'); break;
                case 11:links1.push('"field7":"'+value.textContent.trim()+'"'); break;
                case 12:links1.push('"field8":"'+value.textContent.trim()+'"'); break;
                case 13:links1.push('"field9":"'+value.textContent.trim()+'"'); break;
                case 14:links1.push('"field10":"'+value.textContent.trim()+'"'); break;
             }
          }
        )
      links.push(links1);
    });
    //links2.push('['+links+']');
    return links;
  });
console.log(lhs);






 }




})();