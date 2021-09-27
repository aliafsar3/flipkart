import  Home from './components/home/Home'
import React from 'react'
import Header from './components/header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from './components/cart/Cart'

const App = () => {
  return (
    <BrowserRouter>
  <Header />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path = "/cart" component={Cart} />
  </Switch>
    </BrowserRouter>
  )
}

export default App
