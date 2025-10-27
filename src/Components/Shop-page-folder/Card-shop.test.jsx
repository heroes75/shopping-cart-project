import { screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import {test, describe, expect} from 'vitest'
import CardShop from "./Card-shop";

describe('test card card component', () => {
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
    ]
    test('card should have a image component', () => {
        render(<MemoryRouter><CardShop title={products[0].title} img={products[0].image}  /> </MemoryRouter>)
        const img = screen.getByAltText(`image of ${products[0].title}`)
        expect(img).toBeInTheDocument()
    })
    test('should have a name of product be title', () => {
        render(<MemoryRouter><CardShop title={products[0].title} /></MemoryRouter>);
        const name = screen.getByText(products[0].title)
        expect(name).toBeInTheDocument()
    })
    test('should have a price of product text', () => {
        render(<MemoryRouter><CardShop price={products[0].price} /></MemoryRouter>);
        const price = screen.getByText(products[0].price)
        expect(price).toBeInTheDocument()
    })
    test('should have a rating of product text', () => {
        render(<MemoryRouter><CardShop rating={products[0].rating.rate } /></MemoryRouter>);
        const rating = screen.getByText(products[0].rating.rate)
        expect(rating).toBeInTheDocument()
    })
    test('should have a button decrement',() => {
        render(<MemoryRouter><CardShop /></MemoryRouter>);
        expect(screen.getByLabelText('decrement')).toBeInTheDocument()
    })
    test('should have a button increment',() => {
        render(<MemoryRouter><CardShop /></MemoryRouter>);
        expect(screen.getByLabelText('increment')).toBeInTheDocument()
    })
    test('should have a input with a placeholder text to 0', () => {
        render(<MemoryRouter><CardShop /></MemoryRouter>);
        expect(screen.getByPlaceholderText('0')).toBeInTheDocument()
    })
    test('click on button increment should increase the input value by one', async () => {
        const user = userEvent.setup()
        render(<MemoryRouter><CardShop /></MemoryRouter>)
        await user.click(screen.getByLabelText('increment'))
        expect(screen.getByPlaceholderText('0')).toHaveValue(2)
    })
    test('click on button decrement should decrease the input value by one', async () => {
        const user = userEvent.setup()
        render(<MemoryRouter><CardShop /></MemoryRouter>)
        await user.click(screen.getByLabelText('decrement'))
        expect(screen.getByPlaceholderText('0')).toHaveValue(0)
    })
    test('type on input should modify the the value', async () => {
        const user = userEvent.setup()
        render(<MemoryRouter><CardShop /></MemoryRouter>)
        await user.clear(screen.getByPlaceholderText('0'))
        await user.type(screen.getByPlaceholderText('0'), '23')
        expect(screen.getByPlaceholderText('0')).toHaveValue(23)
    })
    test('should always be superior to 0', async () => {
        const user = userEvent.setup()
        render(<MemoryRouter><CardShop /></MemoryRouter>)
        await user.tripleClick(screen.getByLabelText('decrement'))
        expect(screen.getByPlaceholderText('0')).toHaveValue(0)
    })
})