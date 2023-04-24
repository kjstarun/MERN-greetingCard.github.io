import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import html2canvas from "html2canvas";
// import { exportComponentAsPNG } from "react-component-export-image";

const Template = () => {
  const { edit } = useParams();
  const [card, setCard] = useState({});
  const [inputFields, setInputFields] = useState(null);
  const { templateItem } = useSelector((state) => state.cardSlice);
  const cardRef = useRef();

  useEffect(() => {
    setCard(templateItem);
    setInputFields(templateItem.input);
  }, []);
  console.log("template item", card);

  // console.log("cardere",cardref)

  const saveImage = async () => {
    // event.preventDefault();
   await html2canvas(cardRef, {
      onrendered: function (canvas) {
        let myImage = canvas.toDataURL("image/png");
        downloadURI("data:" + myImage, "CustomGreeting.png");
      },
    });
  };

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

    console.log(key, inputValue);

    setCard({
      ...card,
      [key]: inputValue,
    });
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {edit ? null : (
        <Link to={"edit"}>
          <Button className="edit-button">Edit this template</Button>
        </Link>
      )}

      <div
        dangerouslySetInnerHTML={{ __html: parseHTML(card.cardHTML) }}
        style={{ width: "100%" }}
        ref={cardRef}
      />
      {edit && (
        <div style={{ width: "20%" }}>
          {inputFields &&
            inputFields.map((item) => {
              return (
                <input
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={handleInput}
                />
              );
            })}
          <button onClick={saveImage}>Save card</button>
        </div>
      )}
    </div>
  );
};

export default Template;
