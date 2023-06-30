import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ExamContextModule } from "../contextApi/examModule";
const ProtectedRoutes = () => {
  const { started } = useContext(ExamContextModule);

  return started ? <Outlet /> : <Navigate to="/exam" />;
};

export default ProtectedRoutes;
