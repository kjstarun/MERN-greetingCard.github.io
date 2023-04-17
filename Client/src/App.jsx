import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/reset.css";
import "./assets/app.css";
import "./assets/birthday.css";
import "./assets/wedding.css";
import "./assets/anniversary.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Birthday from "./templates/birthday/birthday";
import Anniversary from "./templates/anniversary/anniversary";
import Wedding from "./templates/wedding/wedding";
import BirthdayEdit from "./templates/birthday/birthday.edit";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/view/birthday" element={<Birthday />} />
          <Route path="/view/anniversary" element={<Anniversary />} />
          <Route path="/view/wedding" element={<Wedding />} />
          <Route path="/view/birthday/:edit" element={<BirthdayEdit />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
