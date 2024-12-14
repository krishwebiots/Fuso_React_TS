import { FC } from "react";
import { Col, Container, Row } from "reactstrap";
import { PropsType } from "../../../Types/HomeDemoType";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import PropertyProductBox1 from "../ProductBox/PropertyProductBox1";
import NotFound from "../NotFound";
import JobProductBox1 from "../ProductBox/JobProductBox1";
import CarProductBox1 from "../ProductBox/CarProductBox1";

const WishlistBox: FC<PropsType> = ({ type }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const showProduct = productItem.filter((item) => item.type === type);
  return (
    <section className={`section-t-md-space section-b-md-space ${type === "car" ? "car-shop-section car-product-section" : ""}`}>
      <Container>
        <Row className="gy-4 ratio_landscape">
          {showProduct.map((item, index) => (
            <Col xl="4" lg="4" sm="6" className="table-row" data-aos="fade-up" data-aos-duration={100 * (index + 1)} key={index}>
              {type === "property" ? <PropertyProductBox1 data={item} wishlist /> : type === "job" ? <JobProductBox1 data={item} wishlist /> : <CarProductBox1 data={item} wishlist />}
            </Col>
          ))}
          {showProduct.length === 0 && <NotFound word="No items found in Product" />}
        </Row>
      </Container>
    </section>
  );
};

export default WishlistBox;
