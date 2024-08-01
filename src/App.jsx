import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

const DEFAULT_FEEDBACK = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem('savedFeedback')) || DEFAULT_FEEDBACK
  );

  const updateFeedback = feedbackType =>
    setFeedback(
      feedbackType
        ? {
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
          }
        : DEFAULT_FEEDBACK
    );

  const totalFeedback = Object.keys(feedback).reduce(
    (acc, key) => acc + feedback[key],
    0
  );

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('savedFeedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description title="Sip Happens Café">
        Please leave your feedback about our service by selecting one of the
        options below.
      </Description>
      <Options onUpdate={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback ? (
        <Feedback
          {...feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </>
  );
}

export default App;
