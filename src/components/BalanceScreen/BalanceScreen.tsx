import "./balanceScreen.css";
import { getBalance } from "../../common/balance";
import ScreenButtonGroup from "../ScreenButtonGroup/ScreenButtonGroup";
import Footer from "../Footer/Footer";
import type { ScreenProps } from "../../types/screenProps";
import { useCallback } from "react";

const BalanceScreen = ({ redirect }: ScreenProps) => {
  const balance = getBalance();

  const handleExit = useCallback(() => redirect("menu"), [redirect]);

  return (
    <div className="balance-screen-buttons-container">
      <ScreenButtonGroup
        actions={[null, null, null, null]}
        redirect={redirect}
        side="left"
      />
      <div className="balance-screen-wrapper">
        <div className="balance-screen-container">
          <h1>Here is your balance</h1>
          <h1>{balance}$</h1>
          <div className="balance-screen-controls-container">
            <p>Exit</p>
          </div>
        </div>
        <Footer />
      </div>
      <ScreenButtonGroup
        actions={[null, null, null, handleExit]}
        redirect={redirect}
        side="right"
      />
    </div>
  );
};

export default BalanceScreen;
