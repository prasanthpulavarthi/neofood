import { Container, Row, Col } from "react-bootstrap";
import "./index.css"
import { BsInstagram} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';

const Footer=()=>{
    return(
        <>
        <div className="footerBg">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="footerImage">
                <img
                  src="./images/footericon.png"
                  alt="burger"
                  className="imageStyle"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col  md={2} xl={3}>
            <p>Subscribe to our news letter</p>
                <form>
                  <div className="d-flex emailSentSection">
                   <input
                    type="email"
                    className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary text-white"
                    id="inputEmail"
                    placeholder="Email Address"
                   />
                    <button className="emailSentBtn">
                    <img src="./images/rightArrow.png" alt="rArrow" />
                    </button>
                  </div>
                </form>
            </Col>
            <Col md={2} xl={3}>
              <ul className="quickLinks text-white">
                <li>Services</li>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
                <li>Offline</li>
              </ul>
            </Col>
            <Col md={2} xl={3}>
              <ul className="quickLinks text-white">
                <li>About</li>
                <li>Our Story</li>
                <li>Benefits</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </Col>
            <Col md={2} xl={3}>
              <ul className="quickLinks text-white">
                <li>Help</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex flex-column flex-lg-row justify-content-between">
                <div className="copyright text-white d-flex">
                  <p>Terms &#x26; Conditions</p>
                  <p>Privacy Policy</p>
                </div>
                <div className='socialIcons'>
                <a href="https://www.facebook.com/"> <FaFacebookF/></a>
                <a href="https://www.instagram.com/"><BsInstagram/></a>
                <a href="https://twitter.com/i/flow/login"><BsTwitter/></a>
            </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        </>
    )
}
export default Footer