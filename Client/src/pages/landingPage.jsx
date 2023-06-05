import Header from "../components/header/header";
import MainSection from "../components/landingSection/mainSection";

const LandingPage = () => {
  return (
    <>
      <Header share={false} welcome={false} />
      <MainSection />
    </>
  );
};

export default LandingPage;
