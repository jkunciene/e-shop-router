import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsList/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      
    </Container>
  )
}

export default App
