import LabTabs from "./Labtabs";

const MainSection = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliukWgOphrwf09ccZGOGOxs0wKZcA6MsDnrs_3VQNXftUPmJg52c1Z15nX1pFhEMWObw&usqp=CAU"
        alt=""
        className="bg-image"
      />
      <div className="landing-text-parent">
        <p className="welcome-text">
          Welcome to
          <span className="logo-text"> 𝕲𝖗𝖊𝖊𝖙𝖎𝖓𝖌𝖘 𝕻𝖎𝖙𝖘𝖙𝖔𝖕</span>
        </p>
        <LabTabs />
      </div>
    </div>
  );
};

export default MainSection;
