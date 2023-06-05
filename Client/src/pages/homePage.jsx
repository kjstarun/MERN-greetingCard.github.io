import CardGenerator from "../components/cards/cardGenerator";
import FilterBar from "../components/filterBar/filterBar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const HomePage = () => {
  return (
    <>
      <Header share={true} welcome={true} />
      <FilterBar />
      <CardGenerator />
      <Footer />
    </>
  );
};

export default HomePage;
