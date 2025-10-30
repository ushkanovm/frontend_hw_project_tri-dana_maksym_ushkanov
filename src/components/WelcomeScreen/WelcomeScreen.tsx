import type { ScreenProps } from "../../types/screenProps";
import Footer from "../Footer/Footer";
import ScreenButtonGroup from "../ScreenButtonGroup/ScreenButtonGroup";
import "./welcomeScreen.css";

const WelcomeScreen = ({ redirect }: ScreenProps) => {
  const handlePinRedirect = () => redirect("pin");

  return (
    <div className="welcome-screen-buttons-container">
      <ScreenButtonGroup
        actions={[null, null, null, null]}
        redirect={redirect}
        side="left"
      />
      <div className="welcome-screen-wrapper">
        <div className="welcome-screen-container">
          <h1>Welcome to the ATM</h1>
          <div className="welcome-screen-controls-container">
            <p>Enter PIN</p>
          </div>
        </div>
        <Footer />
      </div>
      <ScreenButtonGroup
        actions={[null, null, null, handlePinRedirect]}
        redirect={redirect}
        side="right"
      />
    </div>
  );
};

export default WelcomeScreen;
