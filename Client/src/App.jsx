import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.css";
import FilterBar from "./components/filterBar/filterBar";
import Header from "./components/header/header";
import CustomFilter from "./components/filterBar/customFilter";

function App() {
  return (
    <>
      <Header />
      <FilterBar />

    </>
  );
}

export default App;

