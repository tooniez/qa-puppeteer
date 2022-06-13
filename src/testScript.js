const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.reddit.com/r/softwaretesting/', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'output/softwaretesting.pdf', format: 'a4' });

  await browser.close();
})();
