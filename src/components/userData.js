import React from "react";
import ApiCall from "./apiCallUserData";
const UserData = (props) => {
  return (
    <section className="page-section table-section" id="table">
      <div className="container-fluid px-4 px-lg-5">
        <h2 className="text-center mt-0">Inventory</h2>
        <hr className="divider" />
        <ApiCall theUsername={props.username} />
      </div>
    </section>
  );
};
export default UserData;
