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
        <Form.Select className="color-filters">
          <option value="select-color">Select color</option>
          <option value="black">Black</option>
          <option value="pink">Pink</option>
          <option value="white">White</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTimeframe">
        <Form.Label>Timeframe</Form.Label>
        <Form.Select className="time-filters">
          <option value="select-timframe">Select Timeframe</option>
          <option value="early-latest">Early to latest</option>
          <option value="latest-early">Latest to early</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default FilterForm;
