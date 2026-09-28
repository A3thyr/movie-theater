import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

test("basic test to identify the text within Home page by datatest-id", () => {
  render(<Home />);
  expect(screen.findByTestId("main")).toBeDefined();
});
