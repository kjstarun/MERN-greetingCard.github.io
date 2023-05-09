import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
// import { exportComponentAsPNG } from "react-component-export-image";
import { saveAs } from "file-saver";
// import domtoimage from "dom-to-image";
// import bday from "../assets/bday.avif";
// import html2canvas from "html2canvas";

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

  // const saveImage = async () => {
  //   let filterImg = cardRef.current;
  //   let convertImg = await domtoimage
  //     .toBlob(document.getElementById("save-image"))
  //     .then((url) => {
  //       window.saveAs(url, "custom.jpg");
  //       // return url;
  //     });
  //   // let convertImg = await domtoimage
  //   //   .toJpeg(document.getElementById("save-image"), { quality: 0.95 })
  //   //   .then(function (dataUrl) {
  //   //     var link = document.createElement("a");
  //   //     link.download = "my-image-name.jpeg";
  //   //     link.href = dataUrl;
  //   //     link.click();
  //   //   });
  // };

  // console.log("cardere",cardref)

  // const saveImage = async () => {
  //   // event.preventDefault();
  //   await html2canvas(cardRef, {
  //     onrendered: function (canvas) {
  //       let myImage = canvas.toDataURL("image/png");
  //       downloadURI("data:" + myImage, "CustomGreeting.png");
  //     },
  //   });
  // };

  const saveImage = (ref) => {
    saveAs(ref, "image.png");
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
        id="save-image"
      />
      {edit && (
        <div style={{ width: "20%" }} className="edit-form">
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
          {/* <button onClick={() => saveImage(cardRef)}>Save card</button> */}
          {/* <a href={cardRef} download={"custom.pdf"}>Save but</a> */}
        </div>
      )}
    </div>
  );
};

export default Template;
