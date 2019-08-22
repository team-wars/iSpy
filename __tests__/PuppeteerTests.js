import puppeteer from 'puppeteer';
import '@babel/polyfill';

const APP = 'http://localhost:3000/';

describe('testing our life stories', () => {
  let page;
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless', '--disable-gpu' ],
    });
    page = await browser.newPage();
  });
  afterAll(() => {
    browser.close();
  });
  describe('form from form?', () => {
    it('can change username', async () => {
      await page.goto(APP);
      await page.waitForSelector('#username');
      await page.focus('#username');
      await page.keyboard.type('Boulder');
      const username = await page.$eval('#username', (el) => el.value);
      expect(username).toBe('Boulder');
    });
  });
});
