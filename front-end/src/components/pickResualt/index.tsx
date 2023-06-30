import Container from "@mui/material/Container";
import IocnHolder from "../IconHolder";
import trueLogo from "../../assets/true.png";
import wronge from "../../assets/false.png";
import "./style.css";
const PickResualt = ({ submited, selectedAns }: any) => {
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
