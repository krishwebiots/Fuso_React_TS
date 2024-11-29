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
import { useLocation } from "react-router-dom";

const GridView: FC<GridViewType> = ({ side, gridSize, sectionClass, gridType, view, topFilter, offcanvasSide, scrollType, map, mapSide, modalType, filterTagsClass, carShow }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [type] = pathname.split("/").slice(1, 2);
  const showProduct = productItem.filter((item) => item.type === type);

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(setCardToShow(carShow || 6));
  }, [carShow, dispatch]);
  return (
    <Fragment>
      <section className={`section-t-md-space section-b-md-space ${sectionClass ? sectionClass : ""}`}>
        <div className={gridSize === 4 ? "custom-container" : "container"}>
          <Row>
            {side !== "no" && (
              <Col xl="3" className={`filter-sidebar${side === "right" ? " order-1" : ""}`}>
                <FilterSidebar value={showProduct} modalType={modalType} type={type} />
              </Col>
            )}
            <div className={side === "no" ? "col-lg-12" : "col-xl-9"}>
              <FilterTags side={side} topFilter={topFilter} mainClass={filterTagsClass} type={type} />
              {map ? (
                <Row className="gy-4">
                  <Col xl="6" className={`map-section ${mapSide === "right" ? "order-1" : ""}`}>
                    <div id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20281.52037088709!2d56.051818439171534!3d25.89548611084295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef67bc7d52f2459%3A0xa922da11fbe1044d!2zQWxqb29kIFJlc29ydCDYpdiz2KrYsdin2K3YqSDYp9mE2KzZiNiv!5e0!3m2!1sen!2sin!4v1731671548714!5m2!1sen!2sin" width={650} height={800} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps Embed of Toronto" />
                    </div>
                  </Col>
                  <GridLayout value={showProduct} type={type} gridSize={gridSize} gridType={gridType} view={view} scrollType={scrollType} map={map} />
                </Row>
              ) : (
                <GridLayout value={showProduct} type={type} gridSize={gridSize} gridType={gridType} view={view} scrollType={scrollType} map={map} />
              )}
            </div>
          </Row>
        </div>
      </section>
      <FilterOffcanvas modalType={modalType} type={type} offcanvasSide={offcanvasSide} />
    </Fragment>
  );
};

export default GridView;
