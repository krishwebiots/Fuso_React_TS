import { Edit, Trash } from "iconsax-react";
import { Button, Table } from "reactstrap";
import { MyPropertiesTitle } from "../../../../../Constants/Constants";
import { PropertiesData, PropertiesHeadData } from "../../../../../Data/Pages/Other";
import { dynamicImage, Image } from "../../../../../Utils";

const MyProperties = () => {
  return (
    <div className="common-card">
      <h4 className="dashboard-title">{MyPropertiesTitle}</h4>
      <Table responsive className="property-table">
        <thead className="table-white">
          <tr>
            {PropertiesHeadData.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PropertiesData.map((property) => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>
                <div className="table-box">
                  <Image src={dynamicImage(property.image)} alt={`p-${property.id}`} className="img-fluid" />
                  <h6>{property.name}</h6>
                </div>
              </td>
              <td>
                <span>{property.views}</span>
              </td>
              <td>
                <h6>{property.response}</h6>
              </td>
              <td>
                <div className="d-flex align-items-center gap-3 justify-content-center">
                  <Button className="edit-btn" color="transparent">
                    <Edit className="iconsax" />
                  </Button>
                  <Button className="delete-btn" color="transparent">
                    <Trash className="iconsax" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyProperties;
