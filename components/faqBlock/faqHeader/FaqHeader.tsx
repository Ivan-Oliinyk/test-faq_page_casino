import Image from "next/image";
import Heading from "../../heading/Heading";
import s from "../../../styles/modules/faq/faq-header.module.scss";
const FaqHeader = ({ title }: { title: string }) => {
  return (
    <div className={s.wrapper}>
      <Heading text={title} />
      <div className={s.content}>
        <div className={s.img__wrapper}>
          <Image src="/images/faq/faq.png" alt="faq" width={200} height={140} />
        </div>
        <div className={s.descr}>
          Nulla eget magna ut purus iaculis dapibus. Vestibulum euismod
          fringilla gravida. Donec a quam a elit tristique fringilla. Nam ipsum
          enim, bibendum vitae magna et, placerat porttitor enim. Suspendisse
          potenti. Donec ut lorem placerat, feugiat magna non, sodales risus.
          Fusce rutrum suscipit diam, eu tempor erat sollicitudin vel.
        </div>
      </div>
    </div>
  );
};

export default FaqHeader;