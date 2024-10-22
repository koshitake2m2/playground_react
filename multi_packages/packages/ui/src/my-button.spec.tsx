import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { MyButton } from "./my-button";

describe("MyButton", () => {
  it("Button shuold be rendered", () => {
    render(<MyButton label="Hello" />);
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });
});
