import { test, describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import {  MemoryRouter } from "react-router";
import Homepage from "./Home-page.jsx";

describe("test homepage page", () => {
  test("should have a h1 text", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getByText('this is the homepage')).toBeInTheDocument()
  });
});
