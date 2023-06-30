import { useContext } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import Container from "@mui/material/Container";
import "./style.css";
const ProgressBar = () => {
  const { questionNumber } = useContext(ExamContextModule);

  return (
    <Container
      className="barContainer"
      style={{
        width: `${(questionNumber + 1) * 10}%`,
        marginLeft: 0,
      }}
    >
      {(questionNumber + 1) * 10}%
    </Container>
  );
};

export default ProgressBar;
