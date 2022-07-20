import { FC } from "react";
import { SearchFormType } from "../../types/faqBlockType";
import s from "./searchForm.module.scss";

const SearchForm: FC<SearchFormType> = ({ text }) => {
  return (
    <form className={s.form}>
      <input type="text" placeholder={text} name="search"></input>
    </form>
  );
};

export default SearchForm;
