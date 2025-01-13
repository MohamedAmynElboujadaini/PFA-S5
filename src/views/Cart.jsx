import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Table,
  Button,
  Alert,
  Badge
} from 'reactstrap';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartFromCookies = Cookies.get('cart');
    if (cartFromCookies) {
      const parsedCart = JSON.parse(cartFromCookies);
      setCart(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  const calculateTotal = (cartItems) => {
    const sum = cartItems.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
    setTotal(sum);
  };

  const removeFromCart = (productId) => {
    let cartFromCookies = Cookies.get('cart');
    cartFromCookies = cartFromCookies ? JSON.parse(cartFromCookies) : [];

    const updatedCart = cartFromCookies.filter(item => item.id !== productId);
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3 className="mb-0">Your Shopping Cart</h3>
            </CardHeader>
            <CardBody>
              {cart.length === 0 ? (
                <Alert color="info">
                  Your cart is empty. Continue shopping to add items to your cart.
                </Alert>
              ) : (
                <>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <strong>{item.name}</strong>
                            {item.description && (
                              <small className="text-muted d-block">
                                {item.description}
                              </small>
                            )}
                          </td>
                          <td>${item.price?.toFixed(2)}</td>
                          <td>
                            <div className="d-flex align-items-center">
                              <Button
                                color="secondary"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span className="mx-2">{item.quantity}</span>
                              <Button
                                color="secondary"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          <td>${(item.price * item.quantity).toFixed(2)}</td>
                          <td>
                            <Button
                              color="danger"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Row className="mt-4">
                    <Col md={6} className="ms-auto">
                      <Table>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Items in Cart:</strong>
                            </td>
                            <td>
                              <Badge color="primary" pill>
                                {cart.reduce((acc, item) => acc + item.quantity, 0)}
                              </Badge>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Total:</strong>
                            </td>
                            <td>
                              <h4 className="mb-0">${total.toFixed(2)}</h4>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <Button color="success" size="lg" block className="mt-3">
                        Proceed to Checkout
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;