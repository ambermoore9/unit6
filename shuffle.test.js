const shuffle = require("../src/shuffle");
const bots = require("../src/botsData");

describe("shuffle should...", () => {
  it('should return an array', () => {
    const shuffleArray = shuffle(bots);

    expect(Array.isArray(shuffleArray)).toBe(true);
  });
});

// describe("shuffle should...", () => {
//   it('should return an array with all the same items', () => {
//     const sameItems = (bots) => bots.every(item => item === bots[0]);
//     const shuffleArray = shuffle(bots);
//     expect(Array.isArray(shuffleArray)).toBe(true);
//     expect(sameItems(shuffleArray)).toBe(true);
//   });
// });

describe("shuffle should...", () => {
  it('should shuffle the items in the array', () => {
    const originalArray = (bots);
    const arrayCopy = [...originalArray];
    shuffle(originalArray);
    originalArray.forEach(bot => {
      expect(bots).toContainEqual(bot);
    });
  });
});

