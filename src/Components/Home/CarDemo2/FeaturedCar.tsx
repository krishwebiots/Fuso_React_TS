import { Col, Container, Row } from "reactstrap";
import { FeaturedCarTitle } from "../../../Constants/Constants";
import { FeaturedCarContentData } from "../../../Data/Demo/CarDemo2";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import CarProductBox2 from "../../CommonComponents/ProductBox/CarProductBox2";
import CommonHeader from "../Common/CommonHeader";

const FeaturedCar = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className="car2-featured-section section-t-lg-space section-b-lg-space overflow-hidden">
      <RatioImage src={dynamicImage("car2/bg-effect/featured-bg.png")} alt="featured-bg" className="bg-img" />
      <Container>
        <CommonHeader title={FeaturedCarTitle} content={FeaturedCarContentData} headClass="title-style-5" titleClass="text-white" />
        <Row className="gy-4 justify-content-center">
          {productItem
            .filter(({ id }) => [13, 14, 15].includes(id))
            .map((car) => (
              <Col xl="4" md="6" key={car.id}>
                <CarProductBox2 data={car} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedCar;
