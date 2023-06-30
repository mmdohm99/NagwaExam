import "./style.css";
import Loader from "../loader";
interface Props {
  title: string;
  center?: any;
  loading?: boolean;
  subTitle: string;
  fetchedData: any;
}
const Header: React.FC<Props> = ({
  subTitle,
  title,
  center = false,
  loading,
  fetchedData,
}) => {
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
