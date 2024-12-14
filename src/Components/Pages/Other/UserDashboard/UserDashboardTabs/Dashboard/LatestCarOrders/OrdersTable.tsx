import { FC } from "react";
import { Table } from "reactstrap";
import { PropsType } from "../../../../../../../Types/HomeDemoType";
import { OrdersData, OrdersHeadData } from "../../../../../../../Data/Pages/Other";
import { dynamicImage, Image } from "../../../../../../../Utils";
import { ComfortableInterior, Phantom } from "../../../../../../../Constants/Constants";

const OrdersTable: FC<PropsType> = ({ type }) => {
  const filteredData = OrdersData.find((data) => data.type === type)?.order || [];
  return (
    <Table responsive>
      <thead className="table-header">
        <tr>
          {OrdersHeadData.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <tr key={index}>
            <td>
              <div className="item-flex">
                <Image src={dynamicImage(item.image)} alt="img" className="img-fluid" />
                <div className="item-details">
                  <h6>{ComfortableInterior}</h6>
                  <span>#EFGH-4156</span>
                </div>
              </div>
            </td>
            <td>{Phantom}</td>
            <td>$67,810</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrdersTable;
