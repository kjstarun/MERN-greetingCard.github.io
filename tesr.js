const arr = [
  {
    heading: "Project",
    subheading: "Test",
    fields: [
      {
        fieldname: "Hello",
        fieldtype: "str",
      },
    ],
  },
  {
    heading: "m",
    subheading: "m",
    fields: [
      {
        fieldname: "m",
        fieldtype: "m",
      },
    ],
  },
];

const validate = (arr) => {
  let flag = true;

  arr.forEach((element) => {
    if (element.heading === "" || element.subheading === "") {
      flag = false;
    } else {
      element.fields.forEach((elem) => {
        if (elem.fieldname === "" || elem.fieldtype === "") {
          flag = false;
        }
      });
    }
  });

  return flag;
};

console.log(validate(arr));
