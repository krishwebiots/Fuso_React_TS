import { FC, Fragment, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import { setCardToShow } from "../../../../ReduxToolkit/Reducers/SidebarReducers";
import { GridViewType } from "../../../../Types/ProductType";
import FilterOffcanvas from "../../../CommonComponents/FilterOffcanvas";
import FilterSidebar from "./Filter";
import FilterTags from "./Filter/FilterTags";
import GridLayout from "./GridLayout";
import Category from "./Category";
import TopFilter from "./Filter/TopFilter";
import RightSidebar from "./RightSidebar";

const GridView: FC<GridViewType> = ({ type, side, gridSize, sectionClass, gridType, view, topFilterSidebar, offcanvasSide, scrollType, map, mapSide, modalType, filterTagsClass, carShow, topCategory, topFilter, jobBoxStyle, fullList }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const { cardToShow } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  const showProduct = productItem.filter((item) => item.type === type);

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(setCardToShow(carShow || cardToShow));
  }, [carShow, cardToShow, dispatch]);
  return (
    <Fragment>
      <section className={`section-t-md-space section-b-md-space ${sectionClass ? sectionClass : ""}`}>
        {topCategory && <Category />}
        <div className={fullList ? "container-fluid" : gridSize === 4 ? "custom-container" : "container"}>
          <Row>
            {side !== "no" && (
              <Col xl="3" className={`filter-sidebar${side === "right" ? " order-1" : ""}`}>
                <FilterSidebar value={showProduct} modalType={modalType} type={type} />
              </Col>
            )}
            <div className={side === "no" ? "col-lg-12" : side === "both" ? "col-xl-6 col-lg-8" : "col-xl-9"}>
              {topFilter && type === "car" && <TopFilter />}
              <FilterTags side={side} topFilterSidebar={topFilterSidebar} mainClass={filterTagsClass} type={type} jobBoxStyle={jobBoxStyle} />
              {map ? (
                <Row className="gy-4">
                  <Col xl="6" className={`map-section ${mapSide === "right" ? "order-1" : ""}`}>
                    <div id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20281.52037088709!2d56.051818439171534!3d25.89548611084295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef67bc7d52f2459%3A0xa922da11fbe1044d!2zQWxqb29kIFJlc29ydCDYpdiz2KrYsdin2K3YqSDYp9mE2KzZiNiv!5e0!3m2!1sen!2sin!4v1731671548714!5m2!1sen!2sin" width={650} height={800} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps Embed of Toronto" />
                    </div>
                  </Col>
                  <GridLayout value={showProduct} type={type} gridSize={gridSize} gridType={gridType} view={view} scrollType={scrollType} map={map} jobBoxStyle={jobBoxStyle} side={side} />
                </Row>
              ) : (
                <GridLayout value={showProduct} type={type} gridSize={gridSize} gridType={gridType} view={view} scrollType={scrollType} map={map} jobBoxStyle={jobBoxStyle} side={side} />
              )}
            </div>
            {side === "both" && <RightSidebar value={showProduct} />}
          </Row>
        </div>
      </section>
      <FilterOffcanvas modalType={modalType} type={type} offcanvasSide={offcanvasSide} />
    </Fragment>
  );
};

export default GridView;
