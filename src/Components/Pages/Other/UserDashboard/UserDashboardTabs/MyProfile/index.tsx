import { Edit } from "iconsax-react";
import React, { FC, Fragment } from "react";
import { Col, Row } from "reactstrap";
import { Address, EditTitle, Href, MyProfileTitle, PersonalInformation } from "../../../../../../Constants/Constants";
import { dynamicImage, Image } from "../../../../../../Utils";
import { AddressListData, PersonalInformationListData } from "../../../../../../Data/Pages/Other";
import { TextInputType } from "../../../../../../Types/OtherType";
import PersonalModal from "./PersonalModal";
import { useAppDispatch } from "../../../../../../ReduxToolkit/Hooks";
import { setAddressModal, setPersonalModal } from "../../../../../../ReduxToolkit/Reducers/SidebarReducers";
import AddressModal from "./AddressModal";

const MyProfile = () => {
  const dispatch = useAppDispatch();

  const TextInput: FC<TextInputType> = ({ label, value }) => (
    <div className="text-input">
      <span>{label}</span>
      <h5>{value}</h5>
    </div>
  );

  return (
    <Fragment>
      <div className="profile-main">
        <div className="common-card">
          <div className="edit-flex">
            <h4 className="dashboard-title mb-0">{MyProfileTitle}</h4>
          </div>
          <div className="profile-img">
            <Image src={dynamicImage("car/person/2.jpg")} alt="Profile" className="img-fluid" />
            <div className="profile-content">
              <h4>Larry Bishop</h4>
              <h6>Real Estate Agent</h6>
              <span>Leeds, United Kingdom</span>
            </div>
          </div>
        </div>
        <div className="common-card">
          <div className="edit-flex">
            <h4 className="dashboard-title mb-0">{PersonalInformation}</h4>
            <a href={Href} className="edit-btn" onClick={() => dispatch(setPersonalModal())}>
              <Edit className="iconsax" />
              {EditTitle}
            </a>
          </div>
          <Row className="gy-lg-4 gy-3">
            {PersonalInformationListData.map((data, index) => (
              <Col lg="6" key={index}>
                <TextInput label={data.label} value={data.value} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="common-card">
          <div className="edit-flex">
            <h4 className="dashboard-title mb-0">{Address}</h4>
            <a href={Href} className="edit-btn" onClick={() => dispatch(setAddressModal())}>
              <Edit className="iconsax" />
              {EditTitle}
            </a>
          </div>
          <Row className="gy-lg-4 gy-3">
            {AddressListData.map((data, index) => (
              <Col lg="6" key={index}>
                <TextInput label={data.label} value={data.value} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <PersonalModal />
      <AddressModal />
    </Fragment>
  );
};

export default MyProfile;
