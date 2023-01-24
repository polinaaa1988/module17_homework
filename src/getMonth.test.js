import { getMonth } from "./getMonth.js";

describe("tests for getMonth function", () => {
    const oneManth = 1;
    const more12 = 13;
    const notNum = `h`;
  
    it("should operate correctly with simple, complex and invalid number", () => {
      expect(getMonth(oneManth)).toBe('январь');
      expect(getMonth(more12)).toBe('неизвестно');
      expect(getMonth(notNum)).toBe('неизвестно');
    });
});