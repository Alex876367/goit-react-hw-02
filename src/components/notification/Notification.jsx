import style from "./Notification.module.css";
import { BsEnvelopeDash } from "react-icons/bs";

import { motion } from "framer-motion";

const Notification = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p className={style.notificationText}>
        <BsEnvelopeDash className={style.feedbackIcon} />
        No feedbacks yet
      </p>
    </motion.div>
  );
};

export default Notification;
