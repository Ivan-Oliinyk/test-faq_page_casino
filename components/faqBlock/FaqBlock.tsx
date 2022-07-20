import { FC, useEffect, useState } from "react";
import FaqHeader from "./faqHeader/FaqHeader";
import FaqItem from "./faqItem/FaqItem";
import Heading from "../heading/Heading";
import s from "./faqBlock.module.scss";
import SearchForm from "../searchForm/SearchForm";
import { ISize } from "../../types/hooksType";
import { useResize } from "../../hooks/useResize";
import { DataType, FaqBlockType } from "../../types/faqBlockType";
import { toChunkArray } from "../../utils/toChunkArray";
import { generateColumnCount } from "../../utils/generateColumnCount";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchFaq } from "../../store/reducers/faqReducer/FaqActionCreator";

const FaqBlock: FC<FaqBlockType> = ({ showHeader = true }) => {
  const { faqBlock, isLoading, error } = useAppSelector(
    (state) => state.faqBlockReducer
  );

  const [context, setContext] = useState([]);
  const { width }: ISize = useResize();

  //use with your data! Uncomment and add you endpoint in ./store/reducers/faqReducer/FaqActionCreator
  // const dispatch = useAppDispatch();

  useEffect(() => {
    setContext(toChunkArray(faqBlock, generateColumnCount(width)));

    //use in with your data! Uncomment and add you endpoint in ./store/reducers/faqReducer/FaqActionCreator
    // dispatch(fetchFaq());
  }, [width]);

  return (
    <div className={s.wrapper}>
      <div>
        {showHeader && (
          <FaqHeader
            title={"FAQ h1"}
            description="Nulla eget magna ut purus iaculis dapibus. Vestibulum euismod
          fringilla gravida. Donec a quam a elit tristique fringilla. Nam ipsum
          enim, bibendum vitae magna et, placerat porttitor enim. Suspendisse
          potenti. Donec ut lorem placerat, feugiat magna non, sodales risus.
          Fusce rutrum suscipit diam, eu tempor erat sollicitudin vel."
          />
        )}
      </div>
      <div className={s.content}>
        <div className={s["content-header"]}>
          <Heading text={"FAQ lorem ipsum h2"} tag={"h2"} />
          <SearchForm text={"Search in FAQ..."} />
        </div>
        <div className={s["content-wrapper"]}>
          {context && context.length > 3 ? (
            <div className={s["content-body"]}>
              {context.map((item: DataType) => (
                <FaqItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          ) : (
            <div className={s["content-body-wrapper"]}>
              {context.map((arr: Array<DataType>, idx) => (
                <div key={idx} className={s["content-body"]}>
                  {arr.map((el: DataType) => (
                    <FaqItem
                      key={el.id}
                      title={el.title}
                      description={el.description}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqBlock;
