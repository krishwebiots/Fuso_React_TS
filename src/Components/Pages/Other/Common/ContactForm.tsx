import { Col, Form, Input, Row } from "reactstrap";
import { Href, SendMessage } from "../../../../Constants/Constants";

const ContactForm = () => {
  return (
    <Form className="login-form contact-form">
      <Row>
        <Col lg="6">
          <div className="form-input">
            <Input type="text" placeholder="First Name" />
          </div>
        </Col>
        <Col lg="6">
          <div className="form-input">
            <Input type="text" placeholder="Last Name" />
          </div>
        </Col>
        <Col lg="6">
          <div className="form-input">
            <Input type="number" placeholder="Phone Number" />
          </div>
        </Col>
        <Col lg="6">
          <div className="form-input">
            <Input type="email" placeholder="Email" />
          </div>
        </Col>
        <Col xs="12">
          <div className="form-input">
            <Input type="textarea" placeholder="Message" className="form-control mb-0" />
          </div>
        </Col>
        <Col xl="4" lg="5" xs="8">
          <a href={Href} className="btn-solid">
            {SendMessage}
          </a>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
