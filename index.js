const puppeteer = require("puppeteer");

const path = "./public";
const apps = {
  dogukaanyilmaz: {
    url: "",
  },
};
const pdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://dogukaanyilmaz.com", { waitUntil: "networkidle2" });
  // await page.evaluate(() => {
  //   document.querySelector("button[type=button]").click();
  // });
  await page.pdf({ path: `${path}/v.pdf`, format: "A4" });

  await browser.close();
};

const ss = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });
  await page.goto("http://douscriptist.me/");
  await page.evaluate(() => {
    document.querySelectorAll(".cell").forEach((elem) => elem.click());
  });
  await page.screenshot({ path: `${path}/douscriptist-1080p.png` });

  await browser.close();
};

const render = async () => await Promise.all([await ss(), await pdf()]);

render();
