import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleSetQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    value.length > 0
      ? handleSetQuery(value)
      : toast.error("Entered nothing. Received nothing.", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
  };

  return (
    <section className={s.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search images"
        />
        <button className={s.formBtn}>Search</button>
      </form>
    </section>
  );
};

export default SearchBar;
