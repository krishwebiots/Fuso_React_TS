import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cancel, FloorPlansTitle, Href, InteriorInspirations } from "../../../../../../../Constants/Constants";
import { ModalSwiperSlider } from "../../../../../../../Data/Pages/Other";
import { AmenitiesData } from "../../../../../../../Data/Property";
import { useAppDispatch, useAppSelector } from "../../../../../../../ReduxToolkit/Hooks";
import { setMoreDetailsModal } from "../../../../../../../ReduxToolkit/Reducers/LayoutReducers";
import { dynamicImage, Image } from "../../../../../../../Utils";
import RatioImage from "../../../../../../../Utils/RatioImage";
import CloseBtn from "../../../../../../CommonComponents/CloseBtn";
import Overview from "../../../../../../CommonComponents/ProductDetail/DetailBody/DetailBodyItem/Overview";

const MoreDetailsModal = () => {
  const { moreDetailsModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setMoreDetailsModal());
  return (
    <Modal fade centered size="xl" modalClassName="theme-modal" className="property-detail-section" isOpen={moreDetailsModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody className="detail-body">
        <Overview type="use_dashboard" label />
        <Row>
          <Col xs="8">
            <h4 className="modal-title">{InteriorInspirations}</h4>
            <Swiper className="modal-swiper-slider ratio_square" {...ModalSwiperSlider}>
              {AmenitiesData.map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={Href}>
                    <RatioImage src={dynamicImage(`property/${item.image}.jpg`)} alt="modal-img" className="bg-img" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col xs="4">
            <h4 className="modal-title">{FloorPlansTitle}</h4>
            <div className="floor-plan">
              <Image src={dynamicImage("property/detail/floor.png")} alt="floor-plan" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-end gap-2 mt-4">
          <Button className="btn-solid" onClick={toggle}>
            {Cancel}
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default MoreDetailsModal;
