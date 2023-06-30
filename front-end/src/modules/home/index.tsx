import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { Container } from "@mui/material";
import "./style.css";
interface Props {}
const Home: React.FC<Props> = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`/exam`);
  }, [navigate]);
  return (
    <div className="homeContainer">
      <Container>
        <h3 className="animate-charcter"> Welcome to Nagwa Exams .</h3>

        <Button
          width={"29%"}
          height={"50px"}
          handleClick={handleClick}
          text={"Take the exam"}
          fontSize={"27px"}
        />
      </Container>
    </div>
  );
};

export default Home;
