import { screen, render, getAllByRole } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import ShopPage from "./Shop-page";
import { useState } from "react";
const product1 = {
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
};
const product2 = {
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
};

const product3 = {
  id: 15,
  title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
  price: 56.99,
  description:
    "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
  category: "women's clothing",
  image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
  rating: {
    rate: 2.6,
    count: 235,
  },
};

const product4 = {
  id: 9,
  title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  price: 64,
  description:
    "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  category: "electronics",
  image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
  rating: {
    rate: 3.3, 
    count: 203,
  },
};

const product5 = {
  id: 5,
  title:
    "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  price: 695,
  description:
    "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  category: "jewelery",
  image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
  rating: {
    rate: 4.6,
    count: 400,
  },
};
const products = [product1, product2, product4, product5, product3];
describe("test Shop-page component", () => {
  test("Shop-page component should have a three card of product component", () => {
    render(
      <MemoryRouter>
        <ShopPage products={products} />
      </MemoryRouter>
    );
    const threeCard = screen.getAllByRole("figure");
    expect(threeCard.length).toBe(5);
  });
  describe("test if all category radio works properly", () => {
    test("check the radio category men's clothing should display only this category", async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ShopPage products={products} />
        </MemoryRouter>
      );
      await user.click(screen.getByLabelText("men's clothing"));
      const allCard = screen.getAllByRole("figure");
      const AllThisCategory = screen.getAllByTestId("men's clothing");
      expect(allCard).toStrictEqual(AllThisCategory);
    });
    test("check the radio category jewelery should display only this category", async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ShopPage products={products} />
        </MemoryRouter>
      );
      await user.click(screen.getByLabelText("jewelery"));
      const allCard = screen.getAllByRole("figure");
      const AllThisCategory = screen.getAllByTestId("jewelery");
      screen.debug();
      expect(allCard).toStrictEqual(AllThisCategory);
    });
    test("check the radio category electronics should display only this category", async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ShopPage products={products} />
        </MemoryRouter>
      );
      await user.click(screen.getByLabelText("electronics"));
      const allCard = screen.getAllByRole("figure");
      const AllThisCategory = screen.getAllByTestId("electronics");
      screen.debug();
      expect(allCard).toStrictEqual(AllThisCategory);
    });
    test("check the radio category women's clothing should display only this category", async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ShopPage products={products} />
        </MemoryRouter>
      );
      await user.click(screen.getByLabelText("women's clothing"));
      const allCard = screen.getAllByRole("figure");
      const AllThisCategory = screen.getAllByTestId("women's clothing");
      screen.debug();
      expect(allCard).toStrictEqual(AllThisCategory);
    });
    test("check the radio category 'All' should display only this category", async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ShopPage products={products} />
        </MemoryRouter>
      );
      await user.click(screen.getByLabelText("jewelery"));
      await user.click(screen.getByLabelText("all"));
      const allCard = screen.getAllByRole("figure");
      const AllThisCategory = screen.getAllByTestId("men's clothing");
      expect(allCard.length).toStrictEqual(5);
    });
  });
  describe("test if all sort radio work properly", () => {
    test("when click on sort by price button should sort by price", async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ShopPage products={products} />
        </MemoryRouter>
      );
      await user.click(screen.getByLabelText("Sort by price"));
      const sortedPrice = screen.getAllByLabelText("price");
      expect(sortedPrice.map((el) => el.textContent)).toStrictEqual(
        [product1, product2, product3, product4, product5].map(
          (el) => `${el.price}`
        )
      );
    });
    test("when click on sort by rating button should sort by rating", async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ShopPage products={products} />
        </MemoryRouter>
      );
      await user.click(screen.getByLabelText("Sort by rating"));
      const sortedRating = screen.getAllByLabelText("rating");
      expect(sortedRating.map((el) => el.textContent)).toStrictEqual(
        [product2, product5, product1, product4, product3].map(
          (el) => `${el.rating.rate}`
        )
      );
    });
  });
  describe('test "Add to cart Button" on shop page', () => {
    vi.mock("../App.jsx", () => {
      return {
        default: vi.fn(() => {
          const [cartItems, setCartItems] = useState([]);
          function updateCart(obj) {
            setCartItems([...cartItems, obj]);
          }
          return <span>cartItems</span>;
        }),
      };
    });
    test('when click on "Add to cart"should update the cart logo', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <ShopPage products={products} />
        </MemoryRouter>
      );
    });
  });
});
