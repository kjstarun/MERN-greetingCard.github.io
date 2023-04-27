import { useState } from "react";
import CustomFilter from "./customFilter";
import FilterForm from "./filterForm";
import PopularFilter from "./popularFilter";

const FilterBar = () => {
  const [filterOptionsFlag, setFilterOptionsFlag] = useState(false);
  return (
    <>
      {console.log(filterOptionsFlag)}
      <div className="filter-bar">
        <PopularFilter />
        <CustomFilter
          filterOptionsFlag={filterOptionsFlag}
          setFilterOptionsFlag={setFilterOptionsFlag}
        />
      </div>
      <FilterForm filterOptionsFlag={filterOptionsFlag} className="filter-form" />
    </>
  );
};

export default FilterBar;
