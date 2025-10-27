import { test, describe, expect, vi } from "vitest";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { createMemoryRouter } from "react-router";
import routes from "./routes.jsx";
import { RouterProvider } from "react-router";

const router = createMemoryRouter(routes);

describe("test nav Bar Component", () => {
  window.fetch = vi.fn(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
  );
  test("should have a nav bar", async () => {
    render(<RouterProvider router={router} />);
    expect(await screen.findByTestId("nav")).toBeInTheDocument();
  });
  test("NavBar should have a 3 components inside him (homepage, shop-page, cart-page)", async () => {
    render(<RouterProvider router={router} />);
    const nav = await screen.findByTestId("nav");
    const homepage = await screen.findByText("Homepage");
    const shopPage = await screen.findByText("Shop");
    const cartPage = await screen.findByText("Cart");
    screen.debug();
    expect(nav).toContainElement(homepage);
    expect(nav).toContainElement(shopPage);
    expect(nav).toContainElement(cartPage);
  });
  describe("test NavBar link", () => {
    test("should be the home in the DOM in the first render", async () => {
      render(<RouterProvider router={router} />);
      expect(
        await screen.findByText("this is the homepage")
      ).toBeInTheDocument();
    });
    test("when click on homepageLink it's should display the homepage", async () => {
      const router = createMemoryRouter(routes);
      const user = userEvent.setup();
      render(<RouterProvider router={router} />);
      const homepageLink = await screen.findByText("Homepage");
      await user.click(homepageLink);
      expect(await screen.findByTestId("homepage")).toBeInTheDocument();
    });
    test("should have the shop page when i click on ShopPage", async () => {
      const user = userEvent.setup();
      render(<RouterProvider router={router} />);
      const shopPageLink = await screen.findByText("Shop");
      screen.debug()

      await user.click(shopPageLink);
      screen.debug()
      expect(screen.getByTestId("shop-page")).toBeInTheDocument();
    });
    test("should have the cart page when i click on cart Link", async () => {
      const user = userEvent.setup();
      render(<RouterProvider router={router} />);
      const cartLink = await screen.findByText("Cart");
      await user.click(cartLink);
      expect(await screen.findByTestId("cart-page")).toBeInTheDocument();
    });
  });
});

describe("test the handle of fetch Product", () => {
  test("should show the Loading text if the API requests is in progress", async () => {
    render(<RouterProvider router={router} />);
    expect(
      screen.getByRole("heading", { name: "LOADING..." })
    ).toBeInTheDocument();
    await waitForElementToBeRemoved(() =>
      screen.getByRole("heading", { name: "LOADING..." })
    );
  });
  test("should modify the product if the fetch success", async () => {
    const user = userEvent.setup();
    window.fetch = vi.fn(() => {
      const products = [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
          rating: {
            rate: 4.7,
            count: 500,
          },
        },
      ];
      return Promise.resolve({
    json: () => Promise.resolve(products),
  });
    });
    render(<RouterProvider router={router} />);
    const shopPageLink = await screen.findByText("Shop");
    await user.click(shopPageLink);
    screen.debug();
    expect(screen.getByText("Mens Cotton Jacket")).toBeInTheDocument();
    expect(screen.getByText("Mens Casual Premium Slim Fit T-Shirts")).toBeInTheDocument();
    expect(screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")).toBeInTheDocument();
  });
  test('if the fetch don\'t work should display a error message', async () => {
    window.fetch = vi.fn(() => {
      return Promise.reject( ()=> console.error('no data fetch'))
    })
    render(<RouterProvider router={router}/>)
  expect(await screen.findByRole('heading', {name: 'Error no data fetch'})).toBeInTheDocument()
  })
  
});
