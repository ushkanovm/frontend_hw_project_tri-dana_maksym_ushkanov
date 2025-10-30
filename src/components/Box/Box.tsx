import "./box.css";
import { useNavigation } from "../../hooks/useNavigation";
import CardBanner from "../Card/CardBanner";

const Box = () => {
  const { redirect, Outlet, screen } = useNavigation();

  return (
    <div className="box-container">
      <div className="box-divider"></div>
      <CardBanner screen={screen} />
      <Outlet redirect={redirect} />
    </div>
  );
};

export default Box;
