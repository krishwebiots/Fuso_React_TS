import { Col, Container, Row } from "reactstrap";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import CommonHeader from "../Common/CommonHeader";
import { CategoriesTitle } from "../../../Constants/Constants";
import { Link } from "react-router-dom";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../Utils";

const Categories = () => {
  const { categoryItem } = useAppSelector((state) => state.product);
  return (
    <section className="section-t-lg-space property2-categories-section">
      <Container>
        <CommonHeader title={CategoriesTitle} headClass="title-style-1 title-style-6" />
        <Row className="gy-xl-0 gy-md-4 g-3 justify-content-center">
          {categoryItem
            .filter(({ id }) => [34, 35, 36, 37].includes(id))
            .map((item, index) => (
              <Col lg="3" xs="6" key={index}>
                <Link to={RouteList.Property.Grid.Property3Grid} className="categories-box">
                  <Image src={dynamicImage(item.categoryImage)} alt="c-1" className="img-fluid w-100" />
                  <div className="categories-info">
                    <h4>{item.label}</h4>
                    <h6>{item.propertyList}</h6>
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
