
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

const ContactUs = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h2 className="contactUsHeading">Contact Us</h2>
            <p className="contactUsDescription">
              Need an experienced and skilled hand with custom IT projects? Fill
              out the form to get a free consultation.
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <form className="mt-5 formStyleControl">
              <div className="mb-5 formSizeControl">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
                  id="inputContent1"
                  placeholder="Your Company Name"
                />
              </div>
              <div className="mb-5 formSizeControl">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
                  id="inputContent2"
                  placeholder="Nature of Business"
                />
              </div>
              <div className="mb-5 d-flex flex-column flex-lg-row formSizeControl">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary addressInput1"
                  id="inputContent3"
                  placeholder="Address"
                />

                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary addressInput2"
                  id="inputContent4"
                  placeholder="Post Code"
                />
              </div>
              <div className="mb-5 formSizeControl">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
                  id="inputContent5"
                  placeholder="Contact name"
                />
              </div>
              <div className="mb-5 formSizeControl">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
                  id="inputContent6"
                  placeholder="Contact Phone"
                />
              </div>
              <div className="mb-5 formSizeControl">
                <input
                  type="email"
                  className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary"
                  id="inputContent7"
                  placeholder="email@gmail"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkAgreement"
                />
                <label className="form-check-label" htmlFor="checkAgreement">
                  I want to protect my data by signing an NDA
                </label>
              </div>
              <button type="submit" className="btn btn-success submitBtn w-100">
                SUBMIT
              </button>
            </form>
          </Col>
          <Col xs={12} lg={6}>
            <div className="addressContainer">
              <h4 className="headText">Offices</h4>
              <div className="addressItem">
                <p>United States</p>
                <p>500 5th Avenue Suite 400, NY 10110</p>
              </div>
              <div className="addressItem">
                <p>United Kingdom</p>
                <p>High St, Bromley BR1 1DN</p>
              </div>
              <div className="addressItem">
                <p>France</p>
                <p>80 avenue des Terroirs de France, Paris</p>
              </div>
              <div className="mapContainer">
                <img src="./images/map.png" alt="map" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
