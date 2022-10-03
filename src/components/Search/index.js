import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addItem, removeItem } from "../../features/addToCart/cartSlice";


export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [items, setItems] = useState([]);

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (item) => {
    dispatch(removeItem(item));
  };

  const itemsInCart = useSelector((state) => state.cart.cartItems);

  const renderButton = (item) => {
    let value = 0;
    itemsInCart.forEach((foodItem) => {
      if (foodItem.id === item.id) {
        value = foodItem.cartQuantity;
      }
    });
    return <>{value === 0 ? <span className="text-white itemQuantityText">Add</span> : <span className="text-white itemQuantityText">{value}</span>}</>;
  };

  useEffect(() => {
    const fetchItems = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchParams.get(
          "name"
        )}&addRecipeInformation=true&apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );

      const data = await api.json();

      setItems(data.results);
    };

    fetchItems();
  }, [searchParams.get("name")]);

  return (
    <>
      <Container fluid>
        <div style={{ height: "50px" }}></div>

        <Row className="mt-5 mb-5">
          <Col xs={12}>
            <div className="grid-container">
              {items.map((item) => (
                <div className="grid-item gridCards shadow" key={item.id}>
                  <div className="card ">
                    <div className="card-image-container">
                      <img
                        className="card-img-top"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        {" "}
                        price: ${item.pricePerServing}{" "}
                      </p>
                      <div className="d-flex align-items-center justify-content-between bg-success w-50 rounded">
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
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
