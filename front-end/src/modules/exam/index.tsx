import { useContext, useState, useEffect, useCallback } from "react";
import { ExamContextModule } from "../../contextApi/examModule";
import Container from "@mui/material/Container";
import RadioButtonsGroup from "../../components/radioBtns";
import ProgressBar from "../../components/progressBar";
import AnswersBar from "../../components/answersBar";
import Button from "../../components/button";
import "./style.css";
import useFetch from "../../utlis/useFetch";
import localStorageExam from "../../utlis/localStorageExam";
import axios, { AxiosResponse } from "axios";
import PickResualt from "../../components/pickResualt";
import Loader from "../../components/loader";
import Header from "../../components/header";
const arr = ["Noun", "Verb", "Adjective", "Adverb"];
interface Props {}
const Exam: React.FC<Props> = () => {
  const [value, setValue] = useState("");
  const {
    examQuestions,
    next,
    questionNumber,
    submited,
    setSubmited,
    setAnswers,
    setSelectedAns,
    selectedAns,
    setStarted,
  } = useContext(ExamContextModule);
  const { response, loading } = useFetch({
    method: "get",
    url: `/exam`,
  });
  // this function turns the route protector on
  useEffect(() => {
    questionNumber === 0 && setStarted(true);
  }, [setStarted, questionNumber]);

  localStorageExam(response as AxiosResponse, loading);
  // this function turn the portected route off after finishin the exam to reach the reasult page
  // it sends the word and the checked answer to back end to check if it is correct answer or not then push it to answers arr
  const handleSubmit = useCallback(async () => {
    if (questionNumber === 9) {
      setStarted(false);
    }

    setSubmited(true);
    await axios
      .post("/exam/resualt", {
        word: examQuestions[questionNumber],
        a: value?.toLowerCase(),
      })
      .then((response) => {
        setAnswers((prev: []) => [...prev, response?.data?.mark]);

        setSelectedAns(() => response?.data?.mark as string);
      });
  }, [
    examQuestions,
    questionNumber,
    setAnswers,
    setSelectedAns,
    setStarted,
    setSubmited,
    value,
  ]);

  return (
    <>
      <Container className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            {" "}
            <ProgressBar />
            <AnswersBar />
            <Header
              title={`Question no.${questionNumber + 1}`}
              subTitle={`Identify the type of the following word : ${examQuestions[questionNumber]}`}
              fetchedData={examQuestions[questionNumber]}
            />
            <PickResualt submited={submited} selectedAns={selectedAns} />
            <RadioButtonsGroup
              submited={submited}
              btns={arr as [string]}
              setValue={setValue}
              value={value}
            />
            <Container className="btnContainer">
              <Button
                width={"45%"}
                text={"Submit"}
                handleClick={handleSubmit}
                disable={submited}
                height={"40px"}
              />
              <Button
                width={"45%"}
                text={questionNumber === 9 ? "Finish" : "Next"}
                disable={!submited}
                handleClick={next}
                height={"40px"}
              />
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

export default Exam;
