const {getRdays} = require("../client/script/getRdays")

const now = new Date()

test('give me the remaining days', () => {
    expect(getRdays(now)).toBe(-0);
});