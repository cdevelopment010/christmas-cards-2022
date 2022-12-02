import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Deals from './Components/Deals';
import Popular from './Components/Popular';
import Basket from './Components/Basket';
import ItemDetail from './Components/ItemDetail';
import SearchDetail from './Components/SearchDetail';

// CSS
import './Styles/variables.css';
import './Styles/helper.css';
import './Styles/index.css';
import './Styles/nav.css';
import './Styles/Card.css';
import './Styles/BasketCard.css';
import './Styles/mediaQuery.css';

const App =  () => {

  const [basketCount, setBasketCount] = useState(0);
  useEffect(()=> {
    updateCount();
  }, [])


  const updateCount = () => {
    let basket = JSON.parse(localStorage.getItem('christmas-code-challenge-2022-cards')) !== null ?
            JSON.parse(localStorage.getItem('christmas-code-challenge-2022-cards'))
            : []
        ; 
    setBasketCount(basket.length)
  }


  return (
    <div>
      <Router>
        <Nav basketCount = {basketCount}/>
        <Routes>
          <Route path="/" element={<Home updateBasket = {updateCount}/>}/>
          <Route path="/deals" element={<Deals updateBasket = {updateCount}/>}/>
          <Route path="/popular" element={<Popular updateBasket = {updateCount}/>}/>
          <Route path="/basket" element={<Basket updateBasket = {updateCount}/>}/>
          <Route path="/shop/:id" element={<ItemDetail updateBasket = {updateCount}/>}/>
          <Route path="/search/:searchTerm" element={<SearchDetail updateBasket = {updateCount}/>}/>
        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
