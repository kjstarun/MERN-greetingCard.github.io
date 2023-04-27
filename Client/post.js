import axios from "axios";

axios.post("http://localhost:1001", {
  cardTitle: "Ashwary",
  cardTag: "wedding",
  cardImageSource:
    "https://greetings-pitstop.s3.ap-south-1.amazonaws.com/2019.11.29%2B-%2BWolensky%2BAmatrudo%2BWedding%2BHigh%2BResolution-0394.jpg",
  isLiked: false,
  isViewed: false,
  isActive: true,
  cardColor: "white",
  cardPopularity: ["new", "marketplace"],
  cardHTML: ` <div class="body-wd">
      <div class="card-parent">
        <div class="image-container-wd">
          <img
            src="https://greetings-pitstop.s3.ap-south-1.amazonaws.com/2019.11.29%2B-%2BWolensky%2BAmatrudo%2BWedding%2BHigh%2BResolution-0394.jpg"
            alt=""
          />
        </div>
        <div class="details-wd">
          <h2 id="card-title-wd">
            {brideName} <span>weds</span> {groomName}
          </h2>
          <p id="card-msg-wd">{description}</p>
          <div class="location-wd">
            <h4>
              Venue: <span>{venue}</span>
            </h4>
            <h4>
              Date and Time: <span>{dateAndTime} onwards</span>
            </h4>
          </div>
        </div>
      </div>
    </div>`,
  brideName: "Kavya",
  groomName: "Kathir",
  description: `We wholeheartedly want to invite you and your entire family to
            attend our wedding ceremony. Come and witness our vows and give us
            sincere prayers for our further life. We wholeheartedly want to
            invite you and your entire family to attend our wedding ceremony.
            Come and witness our vows`,
  venue: "Coimbatore",
  dateAndTime: "31st February 5pm",
  input: [
    {
      name: "brideName",
      type: "text",
      placeholder: "Enter Bridename",
    },
    {
      name: "groomName",
      type: "text",
      placeholder: "Enter Groomname",
    },
    {
      name: "description",
      type: "text",
      placeholder: "Enter Description",
    },
    {
      name: "venue",
      type: "text",
      placeholder: "Enter Venue",
    },
    {
      name: "dateAndTime",
      type: "text",
      placeholder: "Enter Date and time in text",
    },
  ],
});
