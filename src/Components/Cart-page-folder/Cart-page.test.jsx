import { screen, render } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import CartPage from "./Cart-page";

//should have 3 components of cardOfCart
//should have a resume buy with :
//  - subtotal who are a total of price of items
//   - a shipping fees
//    - a taxes of 20%
//     - total of price with all taxes
//should be able to delete a items
//when a quantity of items reach 0 should deleting the items
//when no items should display "no items"
//click on decreasing or increasing button it's should modify the cart logo

const cartItems = [
  {
    id: 1,
    numberOfItems: 3,
  },
  {
    id: 2,
    numberOfItems: 2,
  },
];
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
];
const subtotal = 109.95 * 3 + 22.3 * 2;
const tax = subtotal * 20 / 100;
const totalItems = subtotal + tax + 20

describe("test cart page component ", () => {
  test("should have 3 components of cardOfCart", () => {
    render(
      <MemoryRouter>
        <CartPage cartItems={cartItems} products={products} />
      </MemoryRouter>
    );
    const allCards = screen.getAllByTestId("card");
    expect(allCards.length).toBe(2);
  });
  describe("should have a resume of buy with :", () => {
    test("subtotal who are a total of price of items", () => {
      render(
        <MemoryRouter>
          <CartPage cartItems={cartItems} products={products} />
        </MemoryRouter>
      );
      const subtotal = screen.getByLabelText("subtotal");
      expect(+subtotal.textContent).toBe(109.95 * 3 + 22.3 * 2);
    });
    test("should have a shipping fees of 20", () => {
      render(
        <MemoryRouter>
          <CartPage cartItems={cartItems} products={products} />
        </MemoryRouter>
      );
      const shippingFees = screen.getByLabelText("shipping-fees");
      expect(+shippingFees.textContent).toBe(20);
    });
    test("should have a taxes of 20%", () => {
      render(
        <MemoryRouter>
          <CartPage cartItems={cartItems} products={products} />
        </MemoryRouter>
      );
      const tax = screen.getByLabelText('tax')
      expect(+tax.textContent).toBe((109.95 * 3 + 22.3 * 2) * 20 / 100)
    });
    test("should have a taxes of 20%", () => {
      render(
        <MemoryRouter>
          <CartPage cartItems={cartItems} products={products} />
        </MemoryRouter>
      );
      const tax = screen.getByLabelText('tax')
      expect(+tax.textContent).toBe((109.95 * 3 + 22.3 * 2) * 20 / 100)
    });
    test("total of price with all taxes", () => {
      render(
        <MemoryRouter>
          <CartPage cartItems={cartItems} products={products} />
        </MemoryRouter>
      );
      const total = screen.getByLabelText('total')
      expect(+total.textContent).toBe(totalItems)
    });
  });
  test("should be able to delete a items")
});
