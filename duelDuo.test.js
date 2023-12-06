const { Builder, Browser, By, until } = require("selenium-webdriver");
require("chromedriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("http://localhost:8000");
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

 describe("Duel Duo tests", () => {
  test("clicking the Draw button displays the div with id = choices", async() => {
    const drawButton = await driver.wait(until.elementLocated(By.id("draw")), 5000);
    await drawButton.click();
    const choices = await driver.findElements(By.className("bot-card"));
    console.log(choices.length);
    expect(choices.length).toBe(5);
  });
});

// describe("Duel Duo tests", () => {
//   test("removed bot goes back to choices", async () => {
//     const removeButton = screen.getByText('Remove from duo');
//     fireEvent.click(removeButton);
//     expect(screen.getByTestId('bot-choices')).toBeInTheDocument();
//     });
//   });