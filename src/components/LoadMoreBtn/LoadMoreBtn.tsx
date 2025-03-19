import s from "./LoadMoreBtn.module.css";

type LoaderMoreBtnProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const LoadMoreBtn: React.FC<LoaderMoreBtnProps> = ({ setPage }) => {
  return (
    <button className={s.moreBtn} onClick={() => setPage((prev) => prev + 1)}>
      Show more images
    </button>
  );
};

export default LoadMoreBtn;
