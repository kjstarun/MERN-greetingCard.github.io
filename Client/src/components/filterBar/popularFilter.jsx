import Form from "react-bootstrap/Form";

function PopularFilter() {
  return (
    <Form.Select  className="popular-filters">
      <option value="1">Popular</option>
      <option value="2">New</option>
      <option value="3">Marketplace</option>
    </Form.Select>
  );
}

export default PopularFilter;
