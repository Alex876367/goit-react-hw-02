import style from "./Description.module.css";
import { motion } from "motion/react";
import { animate } from "motion";
import { stagger } from "motion";

animate([
  // ["div", { opacity: 1 }],
  ["div", { y: [-100, 0] }, { delay: stagger(0.3) }],
]);

const Description = () => {
  return (
    <div className={style.descriptionWrapper}>
      <h1 className={style.pageTitle}>Welcome to Sip Happens Café</h1>
      <p className={style.pageDescitption}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
