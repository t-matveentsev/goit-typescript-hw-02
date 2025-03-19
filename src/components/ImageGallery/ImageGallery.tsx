import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
  articles: Array<{
    id: string;
    urls: { small: string; regular: string };
    alt_description: string;
  }>;
  openModal: (url: string) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ articles, openModal }) => {
  return (
    <ul className={s.wrapper}>
      {articles.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
