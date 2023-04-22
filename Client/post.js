import axios from "axios";

axios.put("http://localhost:1001", {
  _id: "643ebdde905469606b0505e8",
  cardHTML: ` <div className="body-an">
      <div className="card-parent-an">
        <div className="image-container-an">
          <img src="https://wallpaperset.com/w/full/2/3/8/151810.jpg" alt="" />
        </div>
        <div className="anniversary-details-parent">
          <div className="anniversary-details-child">
            <p className="anniversary-text">{AnniversaryData.heading}</p>
            <h3 className="anniversary-names">
              {AnniversaryData.firstName} ♡ {AnniversaryData.lastName}
            </h3>
            <h4 className="anniversary-message">
              {AnniversaryData.description}
            </h4>
          </div>
        </div>
      </div>
    </div>`,
});
