import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import {
  addItem,
  removeItem,
  clearCart,
} from "../../features/addToCart/cartSlice";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./index.css";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cItems, setCItems] = useState([]);

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const cartAmount = useSelector((state) => state.cart.cartTotalAmount);

  useEffect(() => {
    setCItems(cartProducts);
  }, [cart]);

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const clrCart = () => {
    dispatch(clearCart());
  };

  const backToCart = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [cart]);

  const itemsInCart = useSelector((state) => state.cart.cartItems);

  const renderButton = (item) => {
    let value = 0;
    itemsInCart.forEach((foodItem) => {
      if (foodItem.id === item.id) {
        value = foodItem.cartQuantity;
      }
    });
    return (
      <>
        {value === 0 ? (
          <span className="text-white itemQuantityText">Add</span>
        ) : (
          <span className="text-white itemQuantityText">{value}</span>
        )}
      </>
    );
  };

  return (
    <>
      {/* empty space */}
      <div style={{ height: "120px" }}></div>
      <section>
        <Container fluid>
          <Row>
            {cItems.length === 0
              ? 
              <div className="text-center heading">
                <p >your cart is empty!</p>
                  
                <Button onClick={backToCart}>Shop Now</Button>
                </div>
              : cItems.map((item) => (
                  <div key={item.id}>
                    <div className="grid-container1">
                      <div className="grid-item1">
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ width: "80px" }}
                        />
                      </div>
                      <div className="grid-item1">
                        <p>{item.title}</p>
                      </div>
                      <div className="grid-item1">
                        <span>Quantity: {item.cartQuantity}</span>
                      </div>
                      <div className="grid-item1">
                        price: ${item.pricePerServing}
                      </div>

                      <div className="grid-item1 d-flex justify-content-end align-items-start">
                        <div
                          className="d-flex align-items-center justify-content-between bg-success rounded"
                          style={{ width: "120px" }}
                        >
                          <a
                            href="#0"
                            className="addBtn btn btn-light text-success border-success"
                            onClick={() => addToCart(item)}
                          >
                            +
                          </a>
                          {renderButton(item)}
                          <a
                            href="#0"
                            className="addBtn btn btn-light text-success border-success"
                            onClick={() => removeFromCart(item)}
                          >
                            -
                          </a>
                        </div>
                      </div>
                      <div className="grid-item1 text-end">
                        ${(item.cartQuantity * item.pricePerServing).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
          </Row>
          <Row>
            <Col xs={12}>
              <div className="d-flex justify-content-end mb-4">
                <div >
                  <h6>Total Amount: $ {cartAmount}</h6>
                  
                  <Button className="text-end me-3" variant="danger" style={{ cursor: "pointer"}} onClick={clrCart} >Clear Cart</Button>
                  <Button
                    className="text-end"
                    style={{ cursor: "pointer"  }}
                    onClick={backToCart}
                    
                  >
                    {" "}
                    <BsFillArrowLeftCircleFill /> Continue Shopping
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;
