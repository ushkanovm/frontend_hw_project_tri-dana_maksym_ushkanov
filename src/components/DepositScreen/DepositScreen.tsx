import "./depositScreen.css";
import { deposit } from "../../common/balance";
import { useCallback, useEffect, useRef, useState } from "react";
import ScreenButtonGroup from "../ScreenButtonGroup/ScreenButtonGroup";
import Footer from "../Footer/Footer";
import type { ScreenProps } from "../../types/screenProps";

const DepositScreen = ({ redirect }: ScreenProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    setValue(onlyNums);
  }, []);

  const handleBlur = useCallback(() => {
    const input = inputRef.current;
    if (input) {
      setTimeout(() => input.focus(), 0);
    }
  }, []);

  const handleEnter = useCallback(() => {
    if (value.length > 0) {
      const amount = parseInt(value, 10);
      if (Number.isFinite(amount) && amount > 0) {
        deposit(amount);
      }
      redirect("menu");
    }
  }, [value, redirect]);

  const handleExit = useCallback(() => redirect("menu"), [redirect]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && value.length > 0) {
        handleEnter();
      }
    },
    [value, handleEnter]
  );

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.focus();
    }
  }, []);

  return (
    <div className="deposit-screen-buttons-container">
      <ScreenButtonGroup
        actions={[null, null, null, null]}
        redirect={redirect}
        side="left"
      />
      <div className="deposit-screen-wrapper">
        <div className="deposit-screen-container">
          <h1>Please enter your deposit</h1>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            ref={inputRef}
            value={value}
            type="text"
            id="pin"
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
          />
          <div className="deposit-screen-controls-container">
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

export default DepositScreen;
