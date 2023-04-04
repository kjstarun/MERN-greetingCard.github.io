import Card from "react-bootstrap/Card";
import HeartSVG from "../../assets/images/heart-svg";
import ViewSVG from "../../assets/images/View-svg";

const CardGenerator = () => {
  const temp = [1, 2, 3];
  return (
    <div className="cards-container">
      {temp.map((item, index) => {
        return (
          <div className="card-parent">
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img
                variant="top"
                src="https://www.shutterstock.com/image-vector/happy-birthdaybeautiful-greeting-card-scratched-260nw-554302417.jpg"
              />
            </Card>
            <Card.Body className="card-details">
              <span>Card Title</span>
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
