import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css";
export default function Loader() {
  return (
    <Container className="loaderContainer">
      <CircularProgress color="secondary" />
    </Container>
  );
}
