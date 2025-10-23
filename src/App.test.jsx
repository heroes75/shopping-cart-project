import { test, describe, expect } from "vitest";
import { screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import App from "./App";
import { render } from "@testing-library/react";
import { createMemoryRouter, MemoryRouter } from "react-router";
import routes from "./routes.jsx";
import { RouterProvider } from "react-router";

describe("test nav Bar Component", () => {
  const router = createMemoryRouter(routes);

  test("should have a nav bar", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });
  test("should have a 3 components inside him", () => {
    render(<RouterProvider router={router} />);
    const nav = screen.getByTestId("nav");
    const homepage = screen.getByText('Homepage');
    const shopPage = screen.getByText('Shop');
    const cartPage = screen.getByText('Cart');
    expect(nav).toContainElement(homepage)
    expect(nav).toContainElement(shopPage)
    expect(nav).toContainElement(cartPage)
  });
});
