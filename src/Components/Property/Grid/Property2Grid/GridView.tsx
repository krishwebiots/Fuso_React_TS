import { Container, Row } from "reactstrap";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import FilterSidebar from "./FilterSidebar";
import GridLayout from "./GridLayout";
import TopPanel from "./TopPanel";
import Pagination from "./Pagination";
import { GridViewType } from "../../../../Types/ProductType";
import { useState } from "react";

const GridView: React.FC<GridViewType> = ({ type }) => {
  const [totalProduct, setTotalProduct] = useState(0);
  const { productItem } = useAppSelector((state) => state.product);
  const showProduct = productItem.filter((item) => item.type === type);
  return (
    <section className="section-t-md-space section-b-md-space">
      <Container>
        <Row>
          <FilterSidebar value={showProduct} type={type} />
          <div className="col-xl-9">
            <TopPanel totalProduct={totalProduct} />
            <GridLayout value={showProduct} type={type} setTotalProduct={setTotalProduct} />
            <Pagination />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default GridView;
