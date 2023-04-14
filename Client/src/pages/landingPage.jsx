import CardGenerator from "../components/cards/cardGenerator";
import FilterBar from "../components/filterBar/filterBar";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <FilterBar />
      <CardGenerator />
      <Footer />
    </>
  );
};

export default LandingPage;
