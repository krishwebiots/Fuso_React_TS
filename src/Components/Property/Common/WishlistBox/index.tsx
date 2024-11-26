import { FC } from "react";
import { Col, Container, Row } from "reactstrap";
import { PropsType } from "../../../../Types/HomeDemo";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import PropertyProductBox1 from "../../../CommonComponents/ProductBox/PropertyProductBox1";

const WishlistBox: FC<PropsType> = ({ type }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const showProduct = productItem.filter((item) => item.type === type);
  return (
    <section className="section-t-md-space section-b-md-space">
      <Container>
        <Row className="gy-4 ratio_landscape">
          {showProduct.map((item, index) => (
            <Col xxl="3" lg="4" sm="6" className="table-row" data-aos="fade-up" data-aos-duration={100 * (index + 1)} key={index}>
              <PropertyProductBox1 data={item} wishlist />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WishlistBox;
