import { useState, useEffect } from "react";

import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";

import "./App.css";
import Notification from "./components/notification/Notification";

const KEYS = {
  good: "good",
  neutral: "neutral",
  bad: "bad",
  lsReviews: "reviews"
};

const defaultReviews = {
  [KEYS.good]: 0,
  [KEYS.neutral]: 0,
  [KEYS.bad]: 0
};

function App() {
  const [reviews, setReviews] = useState(() => {
    const localData = JSON.parse(localStorage.getItem(KEYS.lsReviews));
    return localData || defaultReviews;
  });

  useEffect(() => {
    localStorage.setItem(KEYS.lsReviews, JSON.stringify(reviews));
  }, [reviews]);

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) =>
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });

  const resetFeedback = () => {
    setReviews(defaultReviews);
  };

  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        total={totalFeedback}
        resetReviews={resetFeedback}
        keys={KEYS}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbacks={reviews}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
