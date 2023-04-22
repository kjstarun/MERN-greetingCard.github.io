import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/reset.css";
import "./assets/app.css";
import "./assets/birthday.css";
import "./assets/wedding.css";
import "./assets/anniversary.css";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Template from "./templates/template";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/view" element={<Template />} />
          {/* <Route path="/view/birthday/:edit" element={<BirthdayEdit />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
