import { Triangle } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#e9caae"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default Loader;
