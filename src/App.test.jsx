import { test, describe, expect } from "vitest";
import { screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

import App from "./App";
import { render } from "@testing-library/react";
describe("test nav Bar Component", () => {
  test("should have a nav bar", () => {
    render(<App />);
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });
});
