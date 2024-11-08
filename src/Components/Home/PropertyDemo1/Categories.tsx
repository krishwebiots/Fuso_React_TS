import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { CategoriesTitle } from "../../../Constants/Constants";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const Categories = () => {
  const { categoryItem } = useAppSelector((state) => state.product);
  return (
    <section className="property-categories-section section-b-space bg-color">
      <Container>
        <CommonHeader title={CategoriesTitle} headClass="title-style-1" />
        <Row className="row-cols-xl-5 row-cols-sm-3 row-cols-2 justify-content-center gy-xl-0 g-3">
          {categoryItem
            .filter((e) => [29, 30, 31, 32, 33].includes(e.id))
            .map((item, index) => (
              <Col key={index}>
                <Link to={RouteList.Property.Grid.Property3Grid} className="categories-box">
                  <Image src={dynamicImage(item.categoryImage)} alt="categories" className="img-fluid" />
                  <div className="categories-box-border">
                    <div className="icon-name">
                      <h5>{item.label}</h5>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
