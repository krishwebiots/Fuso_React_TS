import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { Talk } from "../../../../Constants/Constants";
import { TouchContent } from "../../../../Data/Pages/Other";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import CommonHeader from "../../../Home/Common/CommonHeader";
import ContactBox from "../Common/ContactBox";
import ContactForm from "../Common/ContactForm";
import Follow from "../Common/Follow";

const ContactUs3Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Contact Us" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="contact-section section-b-space">
        <Container>
          <Row className="gx-md-5 gy-4">
            <Col lg="7" md="6">
              <div className="left-contact">
                <CommonHeader title={Talk} content={TouchContent} headClass="content-title text-start" />
                <div className="form-box bg-transparent p-0">
                  <ContactForm />
                </div>
              </div>
            </Col>
            <Col lg="5" md="6" className="col-lg-5 col-md-6">
              <div className="right-contact">
                <div className="contact-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27404.108970975958!2d-74.15219533827555!3d40.573765671825385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1712811360770!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map" />
                </div>
                <ContactBox type="contact_3" />
                <Follow />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ContactUs3Container;
