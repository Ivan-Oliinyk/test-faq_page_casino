import { FC } from "react";
import { SearchFormType } from "../../types/faqBlockType";
import s from "./searchForm.module.scss";

const SearchForm: FC<SearchFormType> = ({ text, handleOnChange }) => {
  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        onChange={handleOnChange}
        type="text"
        placeholder={text}
        name="search"
      ></input>
    </form>
  );
};

export default SearchForm;
