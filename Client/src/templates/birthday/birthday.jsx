import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import birthdaySlice from "../../redux/features/birthdaySlice";

const Birthday = () => {
  const BirthdayData = useSelector((state) => state.birthdaySlice);
  const { edit } = useParams();
  return (
    <>
      {edit ? null : (
        <Link to={"edit"}>
          <Button className="edit-button">Edit this template</Button>
        </Link>
      )}
      <div className="body-bd">
        <div className="card-parent">
          <div className="details-bd">
            <h2 id="card-title-bd">{BirthdayData.heading}</h2>
            <p id="card-msg-bd">{BirthdayData.description}</p>
            <h3 id="card-from-bd">{BirthdayData.signature}</h3>
          </div>
          <div className="image-container-bd">
            <img
              src="https://img.freepik.com/free-vector/realistic-happy-birthday-black-golden_1361-3241.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Birthday;
