import axios from "axios";

export function getExam() {
  return axios.get("/exam").then((res) => res.data);
}
