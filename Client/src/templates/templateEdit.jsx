import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Template from "./template";

const EditTemplate = () => {
  const { templateItem } = useSelector((state) => state.cardSlice);
  const [inputFields, setInputFields] = useState(null);

  useEffect(() => {
    setInputFields(templateItem.input);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Template />
      <div>
        {inputFields &&
          inputFields.map((item) => {
            return <input name={item.name} type={item.type} placeholder={item.placeholder} />;
          })}
      </div>
    </div>
  );
};

export default EditTemplate;
