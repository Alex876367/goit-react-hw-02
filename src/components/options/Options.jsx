import style from "./Options.module.css";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { BsEmojiNeutral, BsEmojiNeutralFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

import { motion } from "framer-motion";

const Options = ({ updateFeedback, resetFeedback, totalFeedback, dataObj }) => {
  return (
    <ul className={style.optionsList}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <li>
          <button
            className={style.optionBtn}
            onClick={() => {
              updateFeedback("good");
            }}
          >
            {dataObj.good === 0 ? (
              <AiOutlineLike className={style.btnIcon} />
            ) : (
              <AiFillLike className={style.btnIcon} />
            )}{" "}
            Good
          </button>
        </li>
      </motion.div>
      <motion.div
        className={style.accordionContent}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
      >
        <li>
          <button
            className={style.optionBtn}
            onClick={() => {
              updateFeedback("neutral");
            }}
          >
            {dataObj.neutral === 0 ? (
              <BsEmojiNeutral className={style.btnIcon} />
            ) : (
              <BsEmojiNeutralFill className={style.btnIcon} />
            )}{" "}
            Neutral
          </button>
        </li>
      </motion.div>
      <motion.div
        className={style.accordionContent}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
      >
        <li>
          <button
            className={style.optionBtn}
            onClick={() => {
              updateFeedback("bad");
            }}
          >
            {dataObj.bad === 0 ? (
              <AiOutlineDislike className={style.btnIcon} />
            ) : (
              <AiFillDislike className={style.btnIcon} />
            )}{" "}
            Bad
          </button>
        </li>
      </motion.div>
      {totalFeedback > 0 && (
        <motion.div
          className={style.accordionContent}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
        >
          <li>
            <button className={style.optionBtn} onClick={resetFeedback}>
              <GrPowerReset className={style.btnIcon} /> Reset
            </button>
          </li>
        </motion.div>
      )}
    </ul>
  );
};

export default Options;
