import atm_sing from "../../assets/atm_sign.png";
import graffiti from "../../assets/graffiti.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-logo">
          <img src={atm_sing} alt="atm sign" />
        </div>
        <div className="header-graffiti">
          <img src={graffiti} alt="graffiti" />
        </div>
      </div>
    </div>
  );
};

export default Header;
