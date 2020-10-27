const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height:720 });
  await page.goto("https://vttechsolution.vn:8056/Views/Login/Login.html?ver=1.2.0.2");
  const user = await page.evaluate( () => {
  let a = document.querySelector('input[name="username"]');
    return a;
});
const pass = await page.evaluate( () => {
  let b = document.querySelector('input[name="pass"]');
  return b;
});

  await page.type(user, 'chikiet');
  await page.type(pass, '@hikiet88');
  await page.click('.login100-form-btn');

  // const songs = await page.evaluate(() => {
  //   let items = document.querySelectorAll(".name_song");
  //   let links = [];
  //   items.forEach(item => {
  //     links.push({
  //       title: item.innerText,
  //       url: item.getAttribute("href")
  //     });
  //   });
  //   return links;
  // });

  // for (let song of songs) {
  //   await page.goto(song.url);
  //   let lyric = await page.evaluate(() => {
  //     let lyric = document
  //       .getElementsByClassName("pd_lyric trans")[0]
  //       .innerHTML.replace(/\<br\>/g, "");
  //     return lyric;
  //   });
  //   await fs.writeFile(`${song.title}.txt`, lyric, function(err) {
  //     if (err) throw err;
  //     console.log("Saved:" + song.title);
  //   });
  // }
})();