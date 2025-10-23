import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router'

function App() {

  return (
    <>
      <nav data-testid="nav">
        <ol>
          <li>
            <Link to='homepage'>Homepage</Link>
          </li>
          <li>
            <Link to='shop'>Shop</Link>
          </li>
          <li>
            <Link to='cart'>Cart</Link>
          </li>
        </ol>
      </nav>
      <Outlet />     
    </>
  )
}

export default App
