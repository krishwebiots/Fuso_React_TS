import { Col, Container, Row } from "reactstrap";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { FeaturedType } from "../../../Types/HomeDemo";
import PropertyProductBox2 from "../../CommonComponents/ProductBox/PropertyProductBox2";
import CommonHeader from "../Common/CommonHeader";
import { FC } from "react";

const Featured: FC<FeaturedType> = ({ title, data, label }) => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className="section-t-lg-space property2-featured-section section-b-lg-space">
      <Container>
        <CommonHeader title={title} headClass="title-style-1 title-style-6" subClass="horizontal-title" url={RouteList.Property.Grid.Property3Grid} view />
        <Row className="gy-xl-0 gy-md-4 g-3 justify-content-center">
          {productItem
            .filter(({ id }) => data.includes(id))
            .map((item, index) => (
              <Col xl="4" md="6" data-aos="fade-up" data-aos-duration={500 * (index + 1)} key={index}>
                <PropertyProductBox2 data={item} label={label} index={index} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Featured;
