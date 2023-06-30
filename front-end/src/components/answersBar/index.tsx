import { useContext } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import IocnHolder from "../IconHolder";
import trueLogo from "../../assets/true.png";
import wronge from "../../assets/false.png";
import Container from "@mui/material/Container";
import "./style.css";
interface Props {}
const AnswersBar: React.FC<Props> = () => {
  const { answers } = useContext(ExamContextModule);
  // this bar show the answerd question result to show the student his status
  return (
    <Container
      className="ansbarContainer"
      style={{
        marginLeft: 0,
      }}
    >
      {answers?.map((ans, i) => (
        <div key={i} className={"ansbarItem"}>
          {ans === (true as any) ? (
            <IocnHolder src={trueLogo} />
          ) : (
            <IocnHolder src={wronge} />
          )}
        </div>
      ))}
    </Container>
  );
};

export default AnswersBar;
