import "./style.css";
import Loader from "../loader";
interface Props {
  title: string;
  center?: any;
  loading?: boolean;
  subTitle: string;
  fetchedData: string;
}
const Header: React.FC<Props> = ({
  subTitle,
  title,
  center = false,
  loading,
  fetchedData,
}) => {
  // header handling the undefined data while fetching with loader
  return (
    <div className={center && "headerContainer"}>
      {loading || fetchedData === undefined ? (
        <Loader />
      ) : (
        <>
          {" "}
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </>
      )}
    </div>
  );
};

export default Header;
