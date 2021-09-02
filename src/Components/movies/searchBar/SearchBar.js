import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = () => {

  const [search, setSearch] = useState("");


  return (
    <form className={s.searchForm} onSubmit={onSubmit}>
    <button type="submit" className={s.searchFormButton}>
      <span className={s.searchFormButtonLabel}>Search</span>
    </button>

    <input
      className={s.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
      value={search}
    />
  </form>
  );
}

export default SearchBar;