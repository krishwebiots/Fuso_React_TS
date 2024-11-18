import { Col, Container, Row } from "reactstrap";
import { OurFeaturedProperties } from "../../../Constants/Constants";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import CommonHeader from "../Common/CommonHeader";
import PropertyProductBox1 from "../../CommonComponents/ProductBox/PropertyProductBox1";

const PropertyFeature = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className="property-featured-section section-b-space bg-color">
      <Container>
        <CommonHeader title={OurFeaturedProperties} headClass="title-style-1" subClass="horizontal-title" url={RouteList.Property.Grid.Property3Grid} view />
        <Row className="gy-4 ratio_landscape">
          {productItem
            .filter(({ id }) => [29, 30, 31, 32, 33, 34, 35, 36].includes(id))
            .map((item, index) => (
              <Col xxl="3" lg="4" sm="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                <PropertyProductBox1 data={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default PropertyFeature;
