import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { setFilterPopular } from "../../redux/features/cardSlice";

function PopularFilter() {
  const dispatch = useDispatch();
  return (
    <Form.Select
      className="popular-filters"
      onChange={(e) => dispatch(setFilterPopular(e.target.value))}>
      <option value="popular">Popular</option>
      <option value="new">New</option>
      <option value="marketplace">Marketplace</option>
    </Form.Select>
  );
}

export default PopularFilter;
