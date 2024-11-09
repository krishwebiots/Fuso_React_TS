import { Container, Row } from "reactstrap";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import FilterSidebar from "./FilterSidebar";
import PropertyBox from "./PropertyBox";
import TopPanel from "./TopPanel";
import Pagination from "./Pagination";

const GridView = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const { propertyType } = useAppSelector((state) => state.filter);
  const showProduct = productItem.filter(({ type, category }) => {
    if (type !== "property") return false;
    return propertyType.some((selectedType: string) => {
      if (selectedType === "all") {
        return true;
      } else {
        return category?.includes(selectedType);
      }
    });
  });
  return (
    <section className="section-t-md-space section-b-md-space">
      <Container>
        <Row>
          <FilterSidebar />
          <div className="col-xl-9">
            <TopPanel />
            <Row className="gy-4 ratio_landscape">
              {showProduct.map((product, index) => (
                <div className="col-sm-6" key={index}>
                  <PropertyBox data={product} />
                </div>
              ))}
            </Row>
            <Pagination />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default GridView;
