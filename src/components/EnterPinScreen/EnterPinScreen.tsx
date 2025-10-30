import "./enterPinScreen.css";
import { useCallback, useEffect, useRef, useState } from "react";
import ScreenButtonGroup from "../ScreenButtonGroup/ScreenButtonGroup";
import Footer from "../Footer/Footer";
import type { ScreenProps } from "../../types/screenProps";

const EnterPinScreen = ({ redirect }: ScreenProps) => {
  const [pin, setPin] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleBlur = () => {
    const input = inputRef.current;
    if (input) {
      setTimeout(() => input.focus(), 0);
    }
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && pin.length > 0) {
        redirect("menu");
      }
    },
    [redirect, pin]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    setPin(onlyNums);
  }, []);

  const handleEnter = () => {
    if (pin.length > 0) {
      redirect("menu");
    }
  };
  const handleExit = () => redirect("welcome");

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.focus();
    }
  }, []);

  return (
    <div className="enter-pin-screen-buttons-container">
      <ScreenButtonGroup
        actions={[null, null, null, null]}
        redirect={redirect}
        side="left"
      />
      <div className="enter-pin-screen-wrapper">
        <div className="enter-pin-screen-container">
          <h1>Enter your PIN</h1>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            ref={inputRef}
            type="password"
            id="pin"
            value={pin}
            maxLength={4}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
          />
          <div className="enter-pin-screen-controls-container">
            <p>Enter</p>
            <p>Exit</p>
          </div>
        </div>
        <Footer />
      </div>
      <ScreenButtonGroup
        actions={[null, null, handleEnter, handleExit]}
        redirect={redirect}
        side="right"
      />
    </div>
  );
};

export default EnterPinScreen;
