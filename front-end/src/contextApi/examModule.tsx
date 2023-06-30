import React, { useState, createContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ExamContextState } from "./types";
const contextDefaultValues: ExamContextState = {
  next: () => "",
  submited: false,
  setSubmited: () => false,
  answers: [],
  setAnswers: () => [],
  examQuestions: [],
  setExamQuestions: () => [],
  selectedAns: "",
  setSelectedAns: () => "",
  questionNumber: 0,
  setQuestionNumber: () => 0,
  started: true,
  setStarted: () => true,
};
export const ExamContextModule =
  createContext<ExamContextState>(contextDefaultValues);
interface Props {
  children: React.ReactNode;
}
const ExamModule: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const [examQuestions, setExamQuestions] = useState<string[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [submited, setSubmited] = React.useState(false);
  const [answers, setAnswers] = React.useState([]);
  const [selectedAns, setSelectedAns] = React.useState("");
  const [started, setStarted] = React.useState(true);
  //  this is the functios used to roll to next word also navigate to resualt page after finishing
  // next / handleSubmit functions is tigger submited to true and false to disable and enable the submit / bext btns
  const next = useCallback(() => {
    if (questionNumber === 9) {
      navigate(`/resualt`);
      setSelectedAns("");
    } else {
      setQuestionNumber((prev) => (prev < 10 ? prev + 1 : prev));

      setSubmited(false);
      setSelectedAns("");
    }
  }, [navigate, questionNumber]);

  return (
    <ExamContextModule.Provider
      value={{
        next,
        setSubmited,
        submited,
        answers,
        setAnswers,
        examQuestions,
        setExamQuestions,
        selectedAns,
        setSelectedAns,
        questionNumber,
        setQuestionNumber,
        setStarted,
        started,
      }}
    >
      {children}
    </ExamContextModule.Provider>
  );
};
export default ExamModule;
