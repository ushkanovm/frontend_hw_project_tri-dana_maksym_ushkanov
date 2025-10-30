import "./screenButton.css";

type ScreenButtonProps = {
  side: "left" | "right";
  onClick?: () => void;
};

const ScreenButton = ({ side, onClick }: ScreenButtonProps) => {
  return (
    <button
      className={`screen-button screen-button--${side}`}
      onClick={onClick}
      type="button"
    />
  );
};

export default ScreenButton;
