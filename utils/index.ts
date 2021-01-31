import puppeteer from "puppeteer";

const path = "./public";

const apps = {
  dogukaanyilmaz: {
    url: "dogukaanyilmaz.com",
  },
};

// const pdf = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://dogukaanyilmaz.com", { waitUntil: "networkidle2" });
//   // await page.evaluate(() => {
//   //   document.querySelector("button[type=button]").click();
//   // });
//   await page.pdf({ path: `${path}/v.pdf`, format: "A4" });

//   await browser.close();
// };

// const ss = async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setViewport({
//     width: 1920,
//     height: 1080,
//     deviceScaleFactor: 1,
//   });
//   await page.goto("http://douscriptist.me/");
//   await page.evaluate(() => {
//     document.querySelectorAll(".cell").forEach(((elem)) => elem.click());
//   });
//   await page.screenshot({ path: `${path}/douscriptist-1080p.png` });

//   await browser.close();
// };

// const render = async () => await Promise.all([await ss(), await pdf()]);

type Resolution = { w: number; h: number; scale: number };

const screenshot = async (app: string, url: string, resolution: Resolution = { w: 1920, h: 1080, scale: 1 }) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: resolution.w,
    height: resolution.h,
    deviceScaleFactor: 1,
  });
  await page.goto(`http://${url}/`);
  await page.screenshot({ path: `${path}/${app}.png` });

  await browser.close();
};
