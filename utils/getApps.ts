// import puppeteer from "puppeteer";
// import ppp from "puppeteer-core";
import chromium from "chrome-aws-lambda";
// import path from "path";

const path = "./public/images";

export type DouApp = {
  url: string;
  name: string;
};

export type DouApps = {
  [key: string]: DouApp;
};

const apps: DouApps = {
  dogukaanyilmaz: {
    url: "dogukaanyilmaz.com",
    name: "dogukaanyilmaz",
  },
  dev: {
    url: "dev.dogukaanyilmaz.com",
    name: "dev",
  },
  currendashcy: {
    url: "currendashcy.dogukaanyilmaz.com",
    name: "currendashcy",
  },
  xox: {
    url: "xox.dogukaanyilmaz.com",
    name: "xox",
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

type Resolution = { w: number; h: number; scale: number };

const screenshot = async (app: string, url: string, resolution: Resolution = { w: 1920, h: 1080, scale: 1 }) => {
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: resolution.w,
    height: resolution.h,
    deviceScaleFactor: 1,
  });
  await page.goto(`http://${url}/`);
  switch (app) {
    case apps.currendashcy.name:
      await new Promise((resolve) => setTimeout(resolve, 4000));
      await page.screenshot({ path: `${path}/${app}.png` });
      break;
    case apps.xox.name:
      await page.evaluate(() => {
        const els: NodeListOf<Element> = document.querySelectorAll(".cell");
        [0, 1, 4, 7, 8].forEach((n) => {
          const elem = els[n] as HTMLElement;
          elem.click();
        });
      });
  }
  await page.screenshot({ path: `${path}/${app}.png` });
  await browser.close();
};

export const getAllApps = async () => {
  let done = [];
  let undone = [];
  for (let app in apps) {
    const { url, name } = apps[app];
    try {
      await screenshot(name, url);
      done.push({ url, name });
      console.log(`${name}: ✅`);
    } catch (error) {
      console.log(`${name}: ❌`);
      undone.push({ url, name });
      console.log(error);
    }
  }

  return { done, undone };
};
