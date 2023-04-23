import axios from "axios";

axios.put("http://localhost:1001", {
  _id: "643ebdde905469606b0505e8",
  cardTitle: "Tarun",
  cardTag: "birthday",
  cardImageSource:
    "https://img.freepik.com/free-vector/realistic-happy-birthday-black-golden_1361-3241.jpg",
  isLiked: false,
  isViewed: false,
  cardColor: "black",
  cardPopularity: ["new"],
  cardHTML: `<div class="body-bd">
        <div class="card-parent">
          <div class="details-bd">
            <h2 id="card-title-bd">{heading}</h2>
            <p id="card-msg-bd">{description}</p>
            <h3 id="card-from-bd">{signature}</h3>
          </div>
          <div class="image-container-bd">
            <img
              src="https://img.freepik.com/free-vector/realistic-happy-birthday-black-golden_1361-3241.jpg"
              alt=""
            />
          </div>
        </div>
      </div>`,
  heading: "Happy Birthday",
  description: ` Lorum Ipsum and a Happy New Year! We would like to thank our entire
            community for their support this year. We enjoyed all the challenged
            and achievements 2017 brought our way and we're looking forward to
            what 2018 will bring.`,
  signature: "Greetings",
  input: [
    {
      name: "heading",
      type: "text",
      placeholder: "Enter a quote / wish",
    },
    {
      name: "description",
      type: "text",
      placeholder: "Enter description",
    },
    {
      name: "signature",
      type: "text",
      placeholder: "Enter a signature message within 10 letters",
    },
  ],
});
