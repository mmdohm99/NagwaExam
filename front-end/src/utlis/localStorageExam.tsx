import { useEffect, useContext } from "react";
import { ExamContextModule } from "../contextApi/examModule";
import { AxiosResponse } from "axios";
interface ele {
  word: string;
  pos: string;
}
// This custom hook is used to set exam questions in the local storage it checks if there is data in local storage 
// then it gets it if not it fetches new data
const useLocalStorage = (response: AxiosResponse, loading: boolean) => {
  const { setExamQuestions } = useContext(ExamContextModule);

  useEffect(() => {
    function getExam() {
      if (!loading) {
        const localData = JSON.parse(localStorage.getItem("exam") as string);
        if (!localData || localData?.length === 0) {
          setExamQuestions(response?.data?.map((ele: ele) => ele?.word));
          localStorage.setItem(
            "exam",
            JSON.stringify(response?.data?.map((ele: ele) => ele?.word))
          );
        } else {
          setExamQuestions(localData);
        }
      }
    }
    getExam();
  }, [response, setExamQuestions, loading]);
};
export default useLocalStorage;
