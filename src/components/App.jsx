import React from 'react';
import { StyledWrapper } from './App.styled';
import { Statistics } from '../components/Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackIncrement = name => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);

        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);

        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);

        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Number(((good / total) * 100).toFixed(2));
  };

  const total = countTotalFeedback();
  const optionsKey = ['good', 'neutral', 'bad'];
  return (
    <StyledWrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsKey} // ['good', 'neutral', 'bad']
          onLeaveFeedback={feedbackIncrement}
        />
      </Section>
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StyledWrapper>
  );
};
