import React, { Fragment } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Container>
          <h1>Welcome to proshop</h1>
        </Container>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
