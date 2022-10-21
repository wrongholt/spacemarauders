import React from "react";
import ApiCall from "./apiCallMarket";
const Market = () => {
  return (
    <section className="page-section table-section" id="table">
      <div className="container-fluid px-4 px-lg-5">
        <h2 className="text-center mt-0">Emporium</h2>
        <hr className="divider" />
        <table className="table table-bordered table-responsive-md">
          <thead>
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Credits</th>
              <th scope="col">Quantity</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <ApiCall />
        </table>
      </div>
    </section>
  );
};
export default Market;
