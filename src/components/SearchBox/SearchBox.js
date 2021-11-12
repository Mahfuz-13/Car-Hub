import React from "react";

const Owner = () => {
  return (
    <div>
      <h1>Search Your Favorite Car</h1>
      <div className="input-group flex-nowrap p-5">
        <input
          type="text"
          className="form-control"
          placeholder="Search by your Car name"
          aria-label="Pill finser"
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  );
};

export default Owner;
