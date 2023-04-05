import Card from "react-bootstrap/Card";
import HeartSVG from "../../assets/svg/heart-svg";
import ViewSVG from "../../assets/svg/View-svg";
import birthday from "../../assets/images/birthday.webp";
import { CARDS_DATA } from "../../utilities/card-data";

const CardGenerator = () => {
  const temp = [1, 2, 3];
  return (
    <div className="cards-container">
      {CARDS_DATA.map((item, index) => {
        return (
          <div className="card-parent">
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src={birthday} alt="Image" />
            </Card>
            <Card.Body className="card-details">
              <span>{item.title}</span>
              <span className="like-view-details">
                <HeartSVG />
                <ViewSVG />
              </span>
            </Card.Body>
          </div>
        );
      })}
    </div>
  );
};

export default CardGenerator;
