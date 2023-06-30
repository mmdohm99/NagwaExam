import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ExamContextModule } from "../contextApi/examModule";
const ProtectedRoutes = () => {
  const { started } = useContext(ExamContextModule);
  // this is protected route prevents the student to navigate to resualt page unless finishing the exam
  return started ? <Navigate to="/exam" /> : <Outlet />;
};

export default ProtectedRoutes;
