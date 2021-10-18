const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('safari').build();
 
  await driver.get('http://www.google.com/ncr');
  const title = await driver.getTitle();
  console.log('Title was: ' + title);
  await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
  await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

  await driver.quit();

  })();