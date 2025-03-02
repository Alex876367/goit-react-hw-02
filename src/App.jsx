import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import Notification from "./components/notification/Notification";
import Cafe from "./components/cafe/Cafe";
import { AnimatePresence } from "framer-motion";

function App() {
  const [feedbackData, setFeedbackData] = useState(() => {
    const feedbackDataFromLS = JSON.parse(
      localStorage.getItem("FeedbackDataKey")
    );

    if (feedbackDataFromLS !== null) {
      return feedbackDataFromLS;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackData({
      ...feedbackData,
      [feedbackType]: feedbackData[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    localStorage.removeItem("FeedbackDataKey");
    setFeedbackData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;
  const positiveFeedback = Math.round(
    (feedbackData.good / (totalFeedback - feedbackData.neutral)) * 100
  );

  useEffect(() => {
    if (totalFeedback === 0) {
      return;
    }

    localStorage.setItem("FeedbackDataKey", JSON.stringify(feedbackData));
  }, [feedbackData]);

  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
        dataObj={feedbackData}
      />
      <Cafe />
      {totalFeedback > 0 ? (
        <Feedback
          dataObj={feedbackData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
