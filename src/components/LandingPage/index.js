import React from 'react'
import "./index.css"
import { Container, Row, Col } from "react-bootstrap";
import PopularItems from '../PopularItems';
import ContactUs from '../ContactUS';
import TrendingFood from '../TrendingFood';
// import Validaton from '../Validation';
const LandingPage=()=> {
  return (
    <>
    <section  className="banner">
    <Container>
        <Row>
            <Col xl={5} className="d-flex flex-column justify-content-center">
            <div className="mb-3">
              <div className="d-flex align-items-center heading">
                <div>
                  <h1 className="heading1">Fast</h1>
                </div>
                <div>
                  <h1 className="heading2">
                    Food <br />
                    Delivery
                  </h1>
                </div>
              </div>
              <div>
                
              </div>
              <div>
                <p className='paragraph'>
                  Discover the best food and drinks near you at the best quality
                  and prices
                </p>
              </div>
            </div>
            <div>
                <div className="buttonContainer d-flex flex-column flex-sm-row align-items-center">
                    <button className="orderButton rounded-pill">Order Now</button>
                    <div className="d-flex align-items-center playTextButton">
                        <div className="d-inline-block playButton">
                            <span>
                                <img src="./images/video_button.png" alt="playBtn" />
                            </span>
                        </div>
                        <span className="playText">Watch Video</span>
                    </div>
                </div>
                <div className='rating mt-5'>
                    <div className='stars'>
                        <img src="./images/star.png" alt="star"/>
                        <img src="./images/star.png" alt="star"/>
                        <img src="./images/star.png" alt="star"/>
                        <img src="./images/star.png" alt="star"/>
                        <img src="./images/star.png" alt="star"/>

                    </div>
                    <h5 className='ratingText'>5 star rating</h5>
                    <p className='review'>based on 1788 reviews</p>
                </div>
            </div>
            </Col>
            <Col xl={7} className="d-none d-xl-flex">
            <div className="ms-auto">
              <img
                src="./images/BannerImage.png"
                alt="fastfood"
                className="w-100"
                style={{ maxWidth: "750px" }}
              />
            </div>
            </Col>
        </Row>
    </Container>
    </section>
    <TrendingFood/>

    <PopularItems/>
    <ContactUs/>
    {/* <Validaton/> */}
    
    </>
  )
}
export default LandingPage
