import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { setFilterColor, setFilterTag } from "../../redux/features/cardSlice";

const FilterForm = ({ filterOptionsFlag }) => {
  const dispatch = useDispatch();

  const triggerEnter = (e) => {
    console.log("truetrigger");
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(true);
      let value = e.target.value;
      console.log(value.toLowerCase());
      dispatch(setFilterTag(value.toLowerCase()));
    }
  };
  return (
    <Form
      className={filterOptionsFlag ? "filter-form open" : "filter-form close"}>
      <Form.Group className="mb-3" controlId="formBasicTags">
        <Form.Label>Tags</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter tag"
          // onChange={(e) => setFilterTag(e.target.value)}
          onKeyPress={(e) => triggerEnter(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicColor">
        <Form.Label>Color</Form.Label>
        <Form.Select
          className="color-filters decorated"
          onChange={(e) => dispatch(setFilterColor(e.target.value))}>
          <option value="select-color">Select color</option>
          <option value="black">Black</option>
          <option value="pink">Pink</option>
          <option value="white">White</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTimeframe">
        <Form.Label>Timeframe</Form.Label>
        <Form.Select
          className="time-filters"
          onChange={(e) => setFilterTimestamp(e.target.value)}>
          <option value="select-timframe">Select Timeframe</option>
          <option value="early-latest">Early to latest</option>
          <option value="latest-early">Latest to early</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default FilterForm;
