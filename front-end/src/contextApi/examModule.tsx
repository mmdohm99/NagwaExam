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
  started: false,
  setStarted: () => false,
};
export const ExamContextModule =
  createContext<ExamContextState>(contextDefaultValues);
export default function ExamModule({ children }: any) {
  const navigate = useNavigate();

  const [examQuestions, setExamQuestions] = useState<any[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [submited, setSubmited] = React.useState(false);
  const [answers, setAnswers] = React.useState([]);
  const [selectedAns, setSelectedAns] = React.useState("");
  const [started, setStarted] = React.useState(false);

  const next = useCallback(() => {
    if (questionNumber === 9) {
      navigate(`/resualt`);
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
}
