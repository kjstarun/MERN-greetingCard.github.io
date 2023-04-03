import Form from "react-bootstrap/Form";

const FilterForm = ({ filterOptionsFlag }) => {
  return (
    <Form
      className={filterOptionsFlag ? "filter-form open" : "filter-form close"}>
      <Form.Group className="mb-3" controlId="formBasicTags">
        <Form.Label>Tags</Form.Label>
        <Form.Control type="text" placeholder="Enter tag" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicColor">
        <Form.Label>Color</Form.Label>
        <div style={{ width: "250px" }}>
          <select id="select-color" onChange="colorFilterList(value)">
            <option value="0"></option>
            <option value="1">Black</option>
            <option value="2">Pink</option>
            <option value="3">White</option>
          </select>
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTimeframe">
        <Form.Label>Timeframe</Form.Label>
        <Form.Control type="text" placeholder="Enter timeframe" />
      </Form.Group>
    </Form>
  );
};

export default FilterForm;
