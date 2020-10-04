import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Bootstrap
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Cart,
} from 'react-bootstrap';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
// My Components
import Message from '../../components/Message';

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  return <div></div>;
};

export default CartScreen;
