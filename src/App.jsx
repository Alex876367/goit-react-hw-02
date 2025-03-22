import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);
  useEffect(() => {
    if (feedback) {
      localStorage.setItem("feedback", JSON.stringify(feedback));
    }
  }, [feedback]);

  const onLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
    localStorage.removeItem("feedback");
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className="App">
      <Description />
      <Options
        onLeaveFeedback={onLeaveFeedback}
        totalFeedback={totalFeedback}
        onReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
