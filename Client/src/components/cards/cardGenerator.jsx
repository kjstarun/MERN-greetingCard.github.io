import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLike,
  handleView,
  updateLikeAPI,
  viewTemplate,
} from "../../redux/features/cardSlice";
import { Link } from "react-router-dom";

const CardGenerator = () => {
  const dispatch = useDispatch();
  const { cardList } = useSelector((state) => state.cardSlice);

  const handleTemplate = (id) => {
    dispatch(viewTemplate(id));
  };

  console.log("cardgenerator list", cardList);

  return (
    <div className="cards-container">
      {cardList &&
        cardList.map((item, index) => {
          return (
            <>
              <div
                className="card-parent-home"
                key={index}
                onClick={(e) => {
                  // e.stopPropagation();
                  handleTemplate(item.id);
                }}>
                <Link
                  to={"view"}
                  style={{ textDecoration: "none", color: "black" }}>
                  <Card className="image-container">
                    <Card.Img
                      variant="top"
                      src={item.cardImageSource}
                      alt="Image"
                      // onClick={() => dispatch(handleView(item.id))}
                    />
                  </Card>
                </Link>
                <Card.Body className="card-details">
                  <span>{item.cardTitle}</span>
                  <span className="like-view-details">
                    <svg
                      onClick={(e) => {
                        // e.stopPropagation();
                        dispatch(updateLikeAPI(item.id));
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16">
                      <path
                        fill={item.isLiked ? "red" : "gray"}
                        d="M5.301 
                      3.002c-.889-.047-1.759.247-2.404.893-1.29 1.292-1.175 3.49.26 4.926l.515.515L8.332 14l4.659-4.664.515-.515c1.435-1.437 1.55-3.634.26-4.926-1.29-1.292-3.483-1.175-4.918.262l-.516.517-.517-.517C7.098 3.438 6.19 3.049 5.3 3.002z"
                      />
                    </svg>
                    {/* <span>{item.likeCount}</span> */}
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.88 68.18"
                      className="view-svg">
                      <path d="M61.44,13.81a20.31,20.31,0,1,1-14.34,6,20.24,20.24,0,0,1,14.34-6ZM1.05,31.31A106.72,106.72,0,0,1,11.37,20.43C25.74,7.35,42.08.36,59,0s34.09,5.92,50.35,19.32a121.91,121.91,0,0,1,12.54,12,4,4,0,0,1,.25,5,79.88,79.88,0,0,1-15.38,16.41A69.53,69.53,0,0,1,63.43,68.18,76,76,0,0,1,19.17,53.82,89.35,89.35,0,0,1,.86,36.44a3.94,3.94,0,0,1,.19-5.13Zm15.63-5A99.4,99.4,0,0,0,9.09,34,80.86,80.86,0,0,0,23.71,47.37,68.26,68.26,0,0,0,63.4,60.3a61.69,61.69,0,0,0,38.41-13.72,70.84,70.84,0,0,0,12-12.3,110.45,110.45,0,0,0-9.5-8.86C89.56,13.26,74.08,7.58,59.11,7.89S29.63,14.48,16.68,26.27Zm39.69-7.79a7.87,7.87,0,1,1-7.87,7.87,7.86,7.86,0,0,1,7.87-7.87Z" />
                    </svg>
                    {/* <span>{item.viewCount}</span> */}
                  </span>
                </Card.Body>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default CardGenerator;
