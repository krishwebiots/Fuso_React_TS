import { FC } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { Filters } from "../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { setOpenFilterSidebar } from "../../ReduxToolkit/Reducers/LayoutReducers";
import { FilterOffcanvasType } from "../../Types/CommonComponentsType";
import FilterSidebar from "./GridView/Filter";

const FilterOffcanvas: FC<FilterOffcanvasType> = ({ type, offcanvasSide, modalType }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const { openFilterSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const showProduct = productItem.filter((item) => item.type === type);
  const toggle = () => dispatch(setOpenFilterSidebar());

  return (
    <Offcanvas fade direction={offcanvasSide === "right" ? "end" : "start"} isOpen={openFilterSidebar} toggle={toggle}>
      <OffcanvasHeader toggle={toggle} tag="h5">
        {Filters}
      </OffcanvasHeader>
      <OffcanvasBody>
        <FilterSidebar value={showProduct} modalType={modalType} type={type} />
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default FilterOffcanvas;
