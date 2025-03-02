import style from "./ProgressBar.module.css";

const ProgresBar = ({ positiveFeedback }) => {
  return (
    <div className={style.progressWrapper}>
      <div
        style={{
          width: `${positiveFeedback}%`,
        }}
        className={style.progressLine}
      ></div>
    </div>
  );
};

export default ProgresBar;
