import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.css";
import FilterBar from "./components/filterBar/filterBar";
import Header from "./components/header/header";
import CustomFilter from "./components/filterBar/customFilter";
import CardGenerator from "./components/cards/cardGenerator";

function App() {
  return (
    <>
      <Header />
      <FilterBar />
      <CardGenerator />
    </>
  );
}

export default App;
