import { useContext, useCallback, useMemo } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import useFetch from "../../utlis/useFetch";
import Header from "../../components/header";
import Container from "@mui/material/Container";
import "./style.css";
const Resualt = () => {
  const navigate = useNavigate();
  const { setSubmited, setAnswers, setQuestionNumber, answers } =
    useContext(ExamContextModule);

  const trueAnswers = useMemo(
    () => answers?.filter((a: any) => a === true),
    [answers]
  );
  const score = useMemo(() => trueAnswers?.length * 10, [trueAnswers?.length]);

  const { response, loading } = useFetch({
    method: "post",
    url: `/exam`,
    data: { score },
  });

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
