export const CARDS_DATA = [
  {
    id: "643ebdde905469606b0505e8",
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
  },
  {
    id: "643ec215905469606b0505eb",
    cardTitle: "Hareesh",
    cardTag: "anniversary",
    cardImageSource: "https://mcdn.wallpapersafari.com/medium/14/80/NoYclA.jpg",
    isLiked: false,
    isViewed: false,
    isActive: true,
    cardColor: "pink",
    cardPopularity: ["new", "marketplace"],
    cardHTML: ` <div class="body-an">
      <div class="card-parent-an">
        <div class="image-container-an">
          <img src="https://wallpaperset.com/w/full/2/3/8/151810.jpg" alt="" />
        </div>
        <div class="anniversary-details-parent">
          <div class="anniversary-details-child">
            <p class="anniversary-text">{heading}</p>
            <h3 class="anniversary-names">
              {firstName} ♡ {lastName}
            </h3>
            <h4 class="anniversary-message">
              {description}
            </h4>
          </div>
        </div>
      </div>
    </div>`,
    heading: "𝓗𝓪𝓹𝓹𝔂 𝓐𝓷𝓷𝓲𝓿𝓮𝓻𝓼𝓪𝓻𝔂",
    description: `Happy anniversary to the only person in the world that I want
              beside me every day and every night for the rest my life. I love
              you, sweetheart. Happy anniversary!`,
    firstName: "Sandeep",
    lastName: "Lavanya",
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
        name: "firstName",
        type: "text",
        placeholder: "Enter Firstname",
      },
      {
        name: "lastName",
        type: "text",
        placeholder: "Enter Lastname",
      },
    ],
  },
  {
    id: "643ec2a9905469606b0505ed",
    cardTitle: "Ashwary",
    cardTag: "wedding",
    cardImageSource:
      "https://images.squarespace-cdn.com/content/v1/5e342ec955a1d92e3ad03fcc/1588706574014-2EM8E28XIXIIT66ZOPA5/2019.11.29+-+Wolensky+Amatrudo+Wedding+High+Resolution-0394.jpg",
    isLiked: false,
    isViewed: false,
    isActive: true,
    cardColor: "white",
    cardPopularity: ["new", "marketplace"],
    cardHTML: ` <div class="body-wd">
      <div class="card-parent">
        <div class="image-container-wd">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5e342ec955a1d92e3ad03fcc/1588706574014-2EM8E28XIXIIT66ZOPA5/2019.11.29+-+Wolensky+Amatrudo+Wedding+High+Resolution-0394.jpg"
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
  },
];
