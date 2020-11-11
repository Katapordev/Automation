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
  await page.waitForSelector('a[data-search="theo ngay"]');
  await page.click('a[data-search="theo ngay"]');

  await navigationPromise;

  await page.waitForSelector('#ScheduleStatus');
  await page.click('#ScheduleStatus');

  await page.waitForSelector('#cbbAppoinmentStatus div[data-value="6"]');
  await page.click('#cbbAppoinmentStatus div[data-value="6"]');


  await page.waitForSelector('#date');
  await page.click('#date');

//   //await page.waitForSelector('.flatpickr-prev-month');
//   //await page.click('.flatpickr-prev-month');

  await page.waitForSelector('span[aria-label="November 2, 2020"]');
  await page.click('span[aria-label="November 2, 2020"]');
  await page.waitForSelector('#date');
  await page.click('#date');
  await page.waitForSelector('span[aria-label="November 2, 2020"]');
  await page.click('span[aria-label="November 2, 2020"]');
  await page.waitForSelector('span[aria-label="November 2, 2020"]');
  await page.click('span[aria-label="November 2, 2020"]');



  await page.waitForSelector('#ScheduleStatus');
  await page.click('#ScheduleStatus');

  await page.waitForSelector('#cbbAppoinmentStatus div[data-value="3"]');
  await page.click('#cbbAppoinmentStatus div[data-value="3"]');
  await page.waitForSelector('#dtContentAppointmentByDayListBody tr');
  const lhs = await page.evaluate(() => {
    let trs = document.querySelectorAll("#dtContentAppointmentByDayListBody tr");
    let links = [];
    let links2 = [];
    trs.forEach(item => {
      var links1 = [];
        let tds= item.querySelectorAll('td');
          tds.forEach(function(value, index) {
            switch(index) {
            //   case 4:
            //     links1.push('"field6":"'+value.querySelector('span:first-child').textContent.trim()+'"');
            //        break;             
              case 6:
                links1.push(value.textContent.trim());
                break;
            //   case 8:
            //     let value1 = value.querySelector('span:first-child');
            //     let value2 = value.querySelector('span:last-child');
            //     links1.push('"field2":"'+value1.textContent.trim()+'"');
            //     links1.push('"field3":"'+value2.textContent.trim()+'"');
            //     break;
            //   case 9:
            //     links1.push('"field4":"'+value.textContent.trim()+'"');
            //       break; 
            //    case 11:
            //     links1.push('"field5":"'+value.querySelector('span:first-child').textContent.trim()+'"');
            //        break;                              
              default:
                // code block
            }
          }
        )
      links.push(links1);
    });
    //links2.push('['+links+']');
    return links;
  });


//   const data = await page.evaluate(() => {
//     let trs = document.querySelectorAll("#dtContentAppointmentByDayListBody tr");
//     let links = [];
//     let links2 = [];
//     trs.forEach(item => {
//       var links1 = [];
//         let tds= item.querySelectorAll('td');
//           tds.forEach(function(value, index) {
//             switch(index) {
//             //   case 4:
//             //     links1.push('"field6":"'+value.querySelector('span:first-child').textContent.trim()+'"');
//             //        break;             
//               case 6:
//                 links1.push('"field1":"'+value.textContent.trim()+'"');
//                 break;
//             //   case 8:
//             //     let value1 = value.querySelector('span:first-child');
//             //     let value2 = value.querySelector('span:last-child');
//             //     links1.push('"field2":"'+value1.textContent.trim()+'"');
//             //     links1.push('"field3":"'+value2.textContent.trim()+'"');
//             //     break;
//             //   case 9:
//             //     links1.push('"field4":"'+value.textContent.trim()+'"');
//             //       break; 
//             //    case 11:
//             //     links1.push('"field5":"'+value.querySelector('span:first-child').textContent.trim()+'"');
//             //        break;                              
//               default:
//                 // code block
//             }
//           }
//         )
//       links.push('{'+links1+'}');
//     });
//     //links2.push('['+links+']');
//     return links;
//   });




  
console.log(lhs);
//   lhs.forEach(function(value, index){
//       FieldsCreate(value);
// });

 //  await browser.close();

})();