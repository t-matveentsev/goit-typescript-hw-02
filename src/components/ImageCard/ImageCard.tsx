import s from "./ImageCard.module.css";

type ImageCardProps = {
  item: {
    id: string;
    urls: { small: string; regular: string };
    alt_description: string;
  };
  openModal: (url: string) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ item, openModal }) => {
  return (
    <div className={s.imgContainer}>
      <img
        className={s.imgItem}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
