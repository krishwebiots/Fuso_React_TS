import { FC, Fragment } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Search } from "../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setAmenities, setBedsRooms, setPopular, setPriceStatus, setPropertyType, setSortBy, setSquareFeetStatus, setyearBuiltStatus } from "../../../ReduxToolkit/Reducers/FilterReducers";
import { setSearchModal } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import FilterSidebar from "../../Property/Common/GridView/Filter";
import CloseBtn from "../CloseBtn";

const SearchModal: FC<{ type: string }> = ({ type }) => {
  const { searchModal } = useAppSelector((state) => state.sidebar);
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const showProduct = productItem.filter((item) => item.type === type);

  const toggle = () => dispatch(setSearchModal());

  const handleReset = () => {
    const resetActions = [setPropertyType([]), setBedsRooms([]), setAmenities([]), setSortBy(null), setPopular(null), setPriceStatus([40000, 500000]), setSquareFeetStatus([400, 4000]), setyearBuiltStatus([2019, 2024])];
    resetActions.forEach(dispatch);
  };

  return (
    <Fragment>
      <div className="mobile-space" />
      <Modal scrollable fade modalClassName="theme-modal search-modal" isOpen={searchModal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
        <ModalBody>
          <div className="filter-header">
            <h3>Search</h3>
            <span onClick={handleReset}>Reset</span>
          </div>
          <FilterSidebar value={showProduct} type={"property"} />
        </ModalBody>
        <ModalFooter>
          <Button className="btn-solid">{Search}</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default SearchModal;
