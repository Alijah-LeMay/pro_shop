import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// My Components
import Header from './components/Header';
import Footer from './components/Footer';
// My Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' exact component={HomeScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
          </Container>
        </main>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
