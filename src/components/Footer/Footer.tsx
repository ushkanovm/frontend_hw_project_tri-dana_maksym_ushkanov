import './footer.css'
import systems from "../../assets/systems.png";
import sticker_graf from "../../assets/sticker_graf.png";

const Footer = () => {
  return (
    <>
      <div className="footer-sticker">
        <img src={sticker_graf} alt="sticker_graf"></img>
      </div>
      <div className="footer-watermark">
        <img src={systems} alt="systems"></img>
      </div>
    </>
  );
};

export default Footer;
