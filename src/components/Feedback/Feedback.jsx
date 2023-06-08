import { useState } from 'react';

export const useFeedback = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const { good } = feedback;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  return {
    feedback,
    totalFeedback: countTotalFeedback(),
    positivePercentage: countPositiveFeedbackPercentage(),
    handleFeedback
  };
};
