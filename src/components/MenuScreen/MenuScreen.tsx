
import type { ScreenProps } from "../../types/screenProps";
import Footer from "../Footer/Footer";
import ScreenButtonGroup from "../ScreenButtonGroup/ScreenButtonGroup";
import "./menuScreen.css";

const MenuScreen = ({ redirect }: ScreenProps) => {
  return (
    <div className="menu-screen-buttons-container">
      <ScreenButtonGroup
        actions={[
          null,
          null,
          () => redirect("withdraw"),
          () => redirect("deposit"),
        ]}
        redirect={redirect}
        side="left"
      />
      <div className="menu-screen-wrapper">
        <div className="menu-screen-container">
          <h1>
            Hi Peter Parker! <br /> Please make a choice...
          </h1>
          <div className="menu-screen-controls-container">
            <div className="menu-screen-controls-left">
              <p>Withdraw</p>
              <p>Deposit</p>
            </div>
            <div className="menu-screen-controls-right ">
              <p>Exit</p>
              <p>Balance</p>
              <p>Re-Enter PIN</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ScreenButtonGroup
        actions={[
          null,
          () => redirect("welcome"),
          () => redirect("balance"),
          () => redirect("pin"),
        ]}
        redirect={redirect}
        side="right"
      />
    </div>
  );
};

export default MenuScreen;
