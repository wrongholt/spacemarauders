import React from "react";
import ApiCall from "./apiCallLeaderboard";
const Leaderboard = () => {
  return (
    <section className="page-section table-section" id="table">
      <div className="container-fluid px-4 px-lg-5">
        <h2 className="text-center mt-0">Leaderboard</h2>
        <hr className="divider" />
        <table className="table table-bordered table-responsive-md">
          <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">Place</th>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <ApiCall />
        </table>
      </div>
    </section>
  );
};
export default Leaderboard;
