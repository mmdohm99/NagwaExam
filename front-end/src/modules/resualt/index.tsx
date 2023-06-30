import { useContext, useCallback, useMemo } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import useFetch from "../../utlis/useFetch";
import Header from "../../components/header";
import Container from "@mui/material/Container";
import "./style.css";
interface Props {}
const Resualt: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { setSubmited, setAnswers, setQuestionNumber, answers } =
    useContext(ExamContextModule);
  // this function counts the true answers
  const trueAnswers = useMemo(
    () => answers?.filter((a: boolean | string) => a === true),
    [answers]
  );

  // this functions counts the score to send it to be and return the rank
  const score = useMemo(() => trueAnswers?.length * 10, [trueAnswers?.length]);

  const { response, loading } = useFetch({
    method: "post",
    url: `/exam`,
    data: { score },
  });
  // this function is used to redirect after finishin the exam to home page and remove
  // the exam from local storage or reatake the same exam or retake a new exam
  const handleRedirect = useCallback(
    (url: string, same: boolean) => {
      if (!same) {
        localStorage.removeItem("exam");
      }
      setAnswers([]);
      setSubmited(false);
      setQuestionNumber(0);
      navigate(url);
    },
    [navigate, setAnswers, setQuestionNumber, setSubmited]
  );

  return (
    <>
      <Container className="resualtContainer">
        {" "}
        <Header
          loading={loading}
          title={`Achived score : ${score}`}
          subTitle={`Achived rank : ${response?.data?.resualt}`}
          center={true}
          fetchedData={response?.data?.resualt}
        />
        <Container className="btnContainer">
          <Button
            width={"33%"}
            text={"Retry Same Exam"}
            handleClick={() => handleRedirect("/exam", true)}
          />
          <Button
            width={"33%"}
            text={"Retry New Exam"}
            handleClick={() => handleRedirect("/exam", false)}
          />
          <Button
            width={"33%"}
            text={"Go Home"}
            handleClick={() => handleRedirect("/", false)}
          />
        </Container>
      </Container>
    </>
  );
};

export default Resualt;
