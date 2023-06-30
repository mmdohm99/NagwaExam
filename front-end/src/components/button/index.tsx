import React from "react";
import "./style.css";
interface Props {
  text: string;
  handleClick: () => void;
  disable?: boolean;
  width?: string;
  height?: string;
  fontSize?:string
}
const Button: React.FC<Props> = ({
  text,
  handleClick,
  disable,
  width,
  height,fontSize
}) => {
  // a fully reusable btn which takes the function for handle click and other props .
  return (
    <>
      <button
        style={{ width, height,fontSize }}
        className="btn"
        disabled={disable}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
