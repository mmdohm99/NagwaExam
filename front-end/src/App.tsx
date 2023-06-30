import Home from "./pages/home";
import ResualtPage from "./pages/resualt";
import ExamPage from "./pages/exam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamModule from "./contextApi/examModule";
import ProtectedRoutes from "./utlis/protectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <ExamModule>
          <Routes>
            <Route index element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/resualt" element={<ResualtPage />} />
            </Route>
            <Route path="/exam" element={<ExamPage />} />
          </Routes>
        </ExamModule>
      </BrowserRouter>
    </>
  );
}

export default App;
