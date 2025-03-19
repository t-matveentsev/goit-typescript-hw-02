import { useEffect, useState } from "react";
import { fetchRequest } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

type Article = {
  id: string;
  urls: { small: string; regular: string };
  alt_description: string;
};

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [targetImage, setTargetImage] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;
    async function fetchArticles() {
      try {
        setLoading(true);
        const { results } = await fetchRequest(query, page);
        setArticles((prev) => [...prev, ...results]);
      } catch {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [query, page]);

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
  };

  const openModal = (imageUrl: string) => {
    setTargetImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setTargetImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar handleSetQuery={handleSetQuery} />
      {articles.length > 0 && (
        <ImageGallery articles={articles} openModal={openModal} />
      )}
      {loading && <Loader />}
      {isError && <ErrorMessage />}
      {articles.length > 0 && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={targetImage}
      />
    </div>
  );
}
