import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FiRefreshCw } from "react-icons/fi";

import Header from "../Header";
import SideMenu from "../SideMenu";

import doller from "../../images/doller.png";

import "./index.css";

const Orders = () => {
  const [count, setCount] = useState(0);

  const onClickIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const onClickDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const tableData = () => (
    <>
      <td>+</td>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <img src={doller} alt="doller" />
      </td>
      <td style={{ color: "#657bf3" }}>#TKN20203754</td>
      <td>2022-05-04</td>
      <td>Locknow</td>
      <td>Abhisek Dixit</td>
      <td>0.00</td>
      <td>Pending</td>
      <td>
        <select>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </td>
    </>
  );
  return (
    <div className="dashboard-main">
      <Header />
      <div className="dashboard-card">
        <SideMenu />
        <div className="orders-body">
          <div className="orders-setting-card">
            <p>
              Orders <RxCross2 size={20} style={{ marginLeft: "5px" }} />
            </p>
            <IoSettingsOutline size={20} />
          </div>
          <div>
            <ul className="status-list">
              <li className="pending">Pending</li>
              <li>Accepted</li>
              <li>AWB Created</li>
              <li>Ready to Ship</li>
              <li>Shipped</li>
              <li>Completed</li>
              <li>Cancelled</li>
            </ul>
          </div>
          <div className="table-card">
            <div className="refresh-card">
              <div>
                <button className="table-card-btn" type="button">
                  <LiaFileImportSolid size={20} className="icon" /> Import
                  Orders
                </button>
                <button disabled className="table-card-btn" type="button">
                  <PiPaperPlaneRightBold size={20} className="icon" />
                  Accept
                </button>
                <button disabled className="table-card-btn" type="button">
                  <FiPrinter size={20} className="icon" />
                  Print
                </button>
              </div>
              <button className="refresh-btn" type="button">
                <FiRefreshCw size={20} className="icon" />
                Refresh
              </button>
            </div>
            <div className="table">
              <table>
                <th>
                  <td>
                    <pre> </pre>
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    Channel <FaFilter size={10} />{" "}
                  </td>
                  <td>
                    Order No <IoMdSearch size={15} />
                  </td>
                  <td>
                    Order Date <IoMdSearch size={15} />
                  </td>
                  <td>
                    City <IoMdSearch size={15} />
                  </td>
                  <td>
                    Customer Name <IoMdSearch size={15} />
                  </td>
                  <td>Order Value</td>
                  <td>Status</td>
                  <td>Operation</td>
                </th>
                <tr>{tableData()}</tr>
                <tr>{tableData()}</tr>
                <tr>{tableData()}</tr>
                <tr>{tableData()}</tr>
                <tr>{tableData()}</tr>
                <tr>{tableData()}</tr>
                <tr>{tableData()}</tr>
                <tr>{tableData()}</tr>
              </table>
            </div>
            <div className="pagination">
              <button type="button" onClick={onClickDecrement}>
                &lt;
              </button>
              <p>{count}</p>
              <button type="button" onClick={onClickIncrement}>
                &gt;
              </button>
              <p>20/page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
