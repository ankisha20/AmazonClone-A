
import './App.css';
import Checkout from './Components/Checkout';

import Header from './Components/Header';
import ImagesCarousal from './Components/ImagesCarousal';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';


function App () {
  return (
    <div>
      {/* {/* header/logo bar */ }
      { <Header /> }

      {/* navbar */ }
      { <Navbar /> }

      {/* images  carusol */ }
      { <ImagesCarousal /> }


      {/* product list */ }
      { <ProductList /> }

      {/* { <Checkout /> } */ }
    </div>
  );
}

export default App;
