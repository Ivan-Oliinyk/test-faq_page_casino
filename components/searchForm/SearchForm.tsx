import { FC } from "react";
import s from "./search-form.module.scss";

type SearchFormType = {
  text: string;
};

const SearchForm: FC<SearchFormType> = ({ text }) => {
  return (
    <form className={s.form}>
      <input type="text" placeholder={text} name="search"></input>
    </form>
  );
};

export default SearchForm;
