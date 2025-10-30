import { screen, render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import CardOfCart from "./Card-of-cart";

describe("test card Cart", () => {
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
  ];
  test("card should have a image component", () => {
    render(
      <MemoryRouter>
        <CardOfCart title={products[0].title} img={products[0].image} />{" "}
      </MemoryRouter>
    );
    const img = screen.getByAltText(`image of ${products[0].title}`);
    expect(img).toBeInTheDocument();
  });
  test("should have a name of product be title", () => {
    render(
      <MemoryRouter>
        <CardOfCart title={products[0].title} />
      </MemoryRouter>
    );
    const name = screen.getByText(products[0].title);
    expect(name).toBeInTheDocument();
  });
  test("should have a price of product text", () => {
    render(
      <MemoryRouter>
        <CardOfCart price={products[0].price} />
      </MemoryRouter>
    );
    const price = screen.getByText(products[0].price);
    expect(price).toBeInTheDocument();
  });
  test("should have a input with a placeholder text to 0", () => {
    render(
      <MemoryRouter>
        <CardOfCart />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText("0")).toBeInTheDocument();
  });
  test("should be have a button to delete card", () => {
    render(
      <MemoryRouter>
        <CardOfCart />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', {name: "✖"})).toBeInTheDocument()
  })
  test("click on button increment should increase the input value by one", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <CardOfCart numberOfItems={1} />
      </MemoryRouter>
    );
    await user.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByPlaceholderText("0")).toHaveValue(2);
  });
  test("click on button decrement should decrease the input value by one", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <CardOfCart numberOfItems={1} />
      </MemoryRouter>
    );
    await user.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByPlaceholderText("0")).toHaveValue(0);
  });
  test("type on input should modify the the value", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <CardOfCart numberOfItems={1} />
      </MemoryRouter>
    );
    await user.clear(screen.getByPlaceholderText("0"));
    await user.type(screen.getByPlaceholderText("0"), "23");
    expect(screen.getByPlaceholderText("0")).toHaveValue(23);
  });
});
