import { test, describe, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { createMemoryRouter } from "react-router";
import routes from "./routes.jsx";
import { RouterProvider } from "react-router";



describe("test nav Bar Component", () => {
  const router = createMemoryRouter(routes);

  test("should have a nav bar", () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });
  test("NavBar should have a 3 components inside him (homepage, shop-page, cart-page)", () => {
    render(<RouterProvider router={router} />);
    const nav = screen.getByTestId("nav");
    const homepage = screen.getByText('Homepage');
    const shopPage = screen.getByText('Shop');
    const cartPage = screen.getByText('Cart');
    expect(nav).toContainElement(homepage)
    expect(nav).toContainElement(shopPage)
    expect(nav).toContainElement(cartPage)
  });
  describe('test NavBar link', () => {
    test('should be the home in the DOM in the first render', () => {
      render(<RouterProvider router={router} />);
      expect(screen.getByText('this is the homepage')).toBeInTheDocument()
    });
    test('when click on homepageLink it\'s should display the homepage', async () => {
      const router = createMemoryRouter(routes);
      const user = userEvent.setup()
      render(<RouterProvider router={router}/>)
      const homepageLink = screen.getByText('Homepage');
      await user.click(homepageLink)
      expect(screen.getByTestId('homepage')).toBeInTheDocument()
    })
    test('should have the shop page when i click on ShopPage', async () => {
      const user = userEvent.setup()
      render(<RouterProvider router={router} />);
      const shopPageLink = screen.getByText('Shop');
      await user.click(shopPageLink)
      expect(screen.getByTestId('shop-page')).toBeInTheDocument()
    });
    test('should have the cart page when i click on cart Link', async () => {
      const user = userEvent.setup()
      render(<RouterProvider router={router} />);
      const cartLink = screen.getByText('Cart');
      await user.click(cartLink)
      expect(screen.getByTestId('cart-page')).toBeInTheDocument()
    })
  })
});
