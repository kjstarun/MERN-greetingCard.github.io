import { useState } from "react";

const CustomFilter = ({ setFilterOptionsFlag }) => {
  return (
    <>
      <div
        title="Filters"
        className="custom-filters"
        onClick={(e) => setFilterOptionsFlag((prev) => !prev)}>
        Filters
      </div>
    </>
  );
};

export default CustomFilter;
