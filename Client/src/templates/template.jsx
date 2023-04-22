import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Template = () => {
  const { edit } = useParams();
  const [card, setCard] = useState({});
  const [data, setdata] = useState({});
  const { templateId, cardList } = useSelector((state) => state.cardSlice);

  useEffect(() => {
    let filterCardId = cardList.filter((item) => {
      console.log(item.id, templateId);
      if (item.id === templateId) {
        console.log(true);
        return item;
      } else {
        console.log(false);
      }
    });
    console.log("filtervar", filterCardId);
    setCard(filterCardId[0]);
  }, []);
  console.log("template item", card);

  const parseHTML = (htmlString) => {
    let localString = htmlString;
    for (let i in card) {
      if (i !== "id" && i !== "cardHTML") {
        localString = localString.replace(`{${i}}`, card[i]);
        // console.log("item[i]", item[i]);
      }
    }
    // console.log("html", htmlString);
    return localString;
  };

  const handleInput = (e) => {
    let key = e.target.name;
    let inputValue = e.target.value;

    setCard({
      ...card,
      [key]: inputValue,
    });
  };

  return (
    <>
      {edit ? null : (
        <Link to={"edit"}>
          <Button className="edit-button">Edit this template</Button>
        </Link>
      )}

      <div dangerouslySetInnerHTML={{ __html: parseHTML(card.cardHTML) }} />
      {/* <input
        type="text"
        onChange={handleInput}
        name="heading"
        value={item.heading || ""}
      /> */}
    </>
  );
};

export default Template;
