export type ExamContextState = {
  next: () => void;
  submited: boolean;
  setSubmited: (sub: boolean) => void;
  answers: string[];
  setAnswers: (answers: any | []) => void;
  examQuestions: string[];
  setExamQuestions: (examQ: string[]) => void;
  selectedAns: string;
  setSelectedAns: (value: string | any) => void;
  questionNumber: number;
  setQuestionNumber: (oldQuestion: number) => void;
  started: boolean;
  setStarted: (finsih: boolean) => void;

};
