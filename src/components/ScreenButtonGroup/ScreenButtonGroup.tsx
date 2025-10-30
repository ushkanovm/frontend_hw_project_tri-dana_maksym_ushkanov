import "./screenButtonGroup.css";
import ScreenButton from "../ScreenButton/ScreenButton";
import type { ScreenProps } from "../../types/screenProps";

type Props = ScreenProps & {
  side: "left" | "right";
  actions: Array<(() => void) | null>;
};

const ScreenButtonGroup = ({ side, actions }: Props) => {
  return (
    <div className="screen-button-group-container">
      {actions.map((action, index) => (
        <ScreenButton onClick={action ?? undefined} side={side} key={index} />
      ))}
    </div>
  );
};

export default ScreenButtonGroup;
