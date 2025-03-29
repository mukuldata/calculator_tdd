import { add } from "./calculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  it("should return the number itself when a single number is provided", () => {
    expect(add("1")).toBe(1);
  });
});