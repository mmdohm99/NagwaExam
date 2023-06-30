import "./style.css";
import React from "react";
interface Props {
  src: string;
}
const IconHolder: React.FC<Props> = ({ src }) => {
  return (
    <div>
      <img className="holder" src={src} alt={"icon"} />
    </div>
  );
};

export default IconHolder;
