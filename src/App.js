
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Deals from './Components/Deals';
import Popular from './Components/Popular';
import Basket from './Components/Basket';
import ItemDetail from './Components/ItemDetail';

// CSS
import './Styles/variables.css';
import './Styles/helper.css';
import './Styles/index.css';
import './Styles/nav.css';
import './Styles/Card.css';
import './Styles/mediaQuery.css';

const App =  () => {

  

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/deals" element={<Deals />}/>
          <Route path="/popular" element={<Popular />}/>
          <Route path="/basket" element={<Basket />}/>
          <Route path="/shop/:id" element={<ItemDetail />}/>
        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
