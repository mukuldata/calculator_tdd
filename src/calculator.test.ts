import { add } from "./calculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  it("should return the number itself when a single number is provided", () => {
    expect(add("1")).toBe(1);
  });
  it("should return the sum of two numbers separated by a comma", () => {
    expect(add("1,5")).toBe(6);
  });
  it("should return the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  it("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});