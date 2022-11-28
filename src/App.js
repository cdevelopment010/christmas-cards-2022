
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./Components/Nav";
import Home from "./Components/Home";
const App =  () => {

  

  return (
    <div>
      <h1>Hello from app</h1>

      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/deals" />
          <Route path="/popular" />
          <Route path="/basket" />
          <Route path="/shop" />
          <Route path="/shop/:id" />
        </Routes>
      </Router>


      
    </div>
  );
}

export default App;
