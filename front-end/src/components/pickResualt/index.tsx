import Container from "@mui/material/Container";
import IocnHolder from "../IconHolder";
import trueLogo from "../../assets/true.png";
import wronge from "../../assets/false.png";
import "./style.css";
interface Props {
  submited: boolean;
  selectedAns: boolean | string;
}
const PickResualt: React.FC<Props> = ({ submited, selectedAns }) => {
  // this component show true or wronge depends on selectedAns value which is true or false
  return (
    <Container className={"pickReasualtContainer"}>
      {submited && (
        <div className={submited ? "show" : "hidden"}>
          {selectedAns === "" ? (
            ""
          ) : selectedAns ? (
            <>
              {" "}
              <IocnHolder src={trueLogo} /> Right Answer
            </>
          ) : (
            <>
              {" "}
              <IocnHolder src={wronge} /> Wronge Answer
            </>
          )}{" "}
        </div>
      )}
    </Container>
  );
};

export default PickResualt;
