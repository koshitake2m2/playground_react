import { it, expect, describe } from "vitest";
import { add } from "./calc";

describe("calc", () => {
  it("add", () => {
    expect(add(1, 2)).toBe(3);
  });
});
