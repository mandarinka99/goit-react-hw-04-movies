import { useState } from "react";
import { toast } from "react-toastify";
import s from "./SearchBar.module.css";
import PropTypes from "prop-types";

const SearchBar = ({ handleSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.currentTarget.value.toLowerCase());
  const onSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      toast.warn("Enter a search word");
      return;
    } else {
      handleSubmit(search);
      setSearch("");
    }
  };
 
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
        placeholder="Search movies"
        onChange={handleChange}
        value={search}
      />
    </form>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func
}

export default SearchBar;
