import { useContext } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import Container from "@mui/material/Container";
import "./style.css";
interface Props {}
const ProgressBar: React.FC<Props> = () => {
  const { questionNumber } = useContext(ExamContextModule);
  // progress bar uses the question number to handle the change in width dynamically
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
