import { Fragment, useState } from "react";
import { Col, Row } from "reactstrap";
import { Href } from "../../../../Constants/Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { GridViewType } from "../../../../Types/ProductType";
import FilterSidebar from "./Filter";
import FilterTags from "./Filter/FilterTags";
import GridLayout from "./GridLayout";

const GridView: React.FC<GridViewType> = ({ type, side, gridSize, sectionClass, gridType, view, topFilter }) => {
  const [totalProduct, setTotalProduct] = useState(0);
  const { productItem } = useAppSelector((state) => state.product);
  const { openFilterSidebar } = useAppSelector((state) => state.sidebar);
  const showProduct = productItem.filter((item) => item.type === type);
  return (
    <Fragment>
      <section className={`section-t-md-space section-b-md-space ${sectionClass ? sectionClass : ""}`}>
        <div className={gridSize === 4 ? "custom-container" : "container"}>
          <Row>
            {!topFilter && side !== "no" && (
              <Col xl="3" className={`filter-sidebar${openFilterSidebar ? " open" : ""}${side === "right" ? " order-1" : ""}`}>
                <FilterSidebar value={showProduct} type={type} />
              </Col>
            )}
            <div className={!topFilter ? "col-lg-12" : side === "no" ? "col-lg-12" : "col-lg-9"}>
              <FilterTags totalProduct={totalProduct} side={side} topFilter={topFilter} />
              <GridLayout value={showProduct} type={type} setTotalProduct={setTotalProduct} gridSize={gridSize} gridType={gridType} view={view} />
            </div>
          </Row>
        </div>
      </section>
      <a href={Href} className={`filter-overlay${openFilterSidebar ? " show" : ""}`} aria-label="Filter Sidebar" />
    </Fragment>
  );
};

export default GridView;
