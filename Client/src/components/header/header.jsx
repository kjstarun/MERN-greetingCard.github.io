import { useSelector } from "react-redux";
import ButtonComp from "./button";
import LogoContainer from "./logo";

const Header = ({ share, welcome }) => {
  const { currentUser } = useSelector((state) => state.cardSlice);
  return (
    <header className="header">
      <LogoContainer />
      <div className="right-header">
        <h3 className="welcome-user">
          {welcome ? `Welcome' ${currentUser}` : "Login to continue"}
        </h3>
        {share ? <ButtonComp /> : ""}
      </div>
    </header>
  );
};

export default Header;
