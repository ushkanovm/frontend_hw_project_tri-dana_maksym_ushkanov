import "./cardBanner.css";
import creditcard_sprite from "../../assets/creditcard_sprite.png";
import type { appScreen } from "../../types/appScreen";

type CardBannerProps = {
  screen: appScreen;
};

const CardBanner = ({ screen }: CardBannerProps) => {
  const isHighlighted = !["welcome", "pin"].includes(screen);

  return (
    <div className="card-banner-container">
      {isHighlighted && (
        <img
          src={creditcard_sprite}
          alt="creditcard_sprite"
          className="card-banner-hightlighted"
        />
      )}
      <img
        src={creditcard_sprite}
        alt="creditcard_sprite"
        className="card-banner-normal"
      />
    </div>
  );
};

export default CardBanner;
