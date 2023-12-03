const { Builder, Browser, By, until } = require("selenium-webdriver");
//const putBotBack = require("../src/putBotBack");
require("chromedriver");
let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

// const DuoComponent = () => {
//   let isBotInDuo = true;
//   const removeFromDuo = () => {
//     isBotInDuo = false;
//     render();
//   };

// const render = () => {
//   const outputDiv = document.getElementById('output');
//   if (isBotInDuo){
//     outputDiv.innerHTML = "<div data-testid='bot-in-duo'>Bot in Duo</div>";
//   } else {
//     outputDiv.innerHTML = "<div data-testid='bot-choices'>Bot Choices</div>";
//   }
// }
// }

// describe("Duel Duo tests", () => {
//   test("removed bot goes back to choices", async () => {
//     fireEvent.click(screen.getByText("Remove from Duo"));
//     expect(screen.getByTestId('bot-choices')).toBeInTheDocument();
//     });
//   });





 describe("Duel Duo tests", () => {
  test("clicking the Draw button displays the div with id = choices", async() => {
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const choices = await driver.findElement(By.className("bot-card"));
    console.log(choices);
    expect(choices.length).toBe(5);
  });

});