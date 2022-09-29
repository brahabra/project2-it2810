const home = require("../pages/Home.tsx");

test('adds 1 + 2 to equal 3', () => {
    expect(home(1, 2)).toBe(3);
  });