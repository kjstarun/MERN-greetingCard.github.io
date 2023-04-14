
const CustomFilter = ({ setFilterOptionsFlag }) => {
  return (
    <>
      <button
        title="Filters"
        className="custom-filters"
        onClick={(e) => setFilterOptionsFlag((prev) => !prev)}>
        Filters
      </button>
    </>
  );
};

export default CustomFilter;
