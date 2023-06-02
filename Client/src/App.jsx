import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/reset.css";
import "./assets/app.css";
import "./assets/birthday.css";
import "./assets/wedding.css";
import "./assets/anniversary.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./templates/template";
import HomePage from "./pages/homePage";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="view" element={<Template />} />
          <Route path="/view/:edit" element={<Template />} />
        </Routes>
        {/* <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />}>
            <Route path="view" element={<Template />} />
            <Route path=":edit" element={<Template />} />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
