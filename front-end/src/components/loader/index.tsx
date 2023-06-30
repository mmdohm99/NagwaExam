import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css";
interface Props {}
const Loader: React.FC<Props> = () => {
  // just a loader :)
  return (
    <Container className="loaderContainer">
      <CircularProgress color="secondary" />
    </Container>
  );
};
export default Loader;
