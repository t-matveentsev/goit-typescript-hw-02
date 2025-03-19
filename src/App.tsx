import { useEffect, useState } from "react";
import { fetchRequest } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [targetImage, setTargetImage] = useState(null);

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

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
  };

  const openModal = (imageUrl) => {
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
