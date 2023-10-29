import React from 'react';
import { StyledWrapper } from './App.styled';
import { Statistics } from '../components/Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // ['good', 'neutral', 'bad']

  feedbackIncrement = name => {
    // console.log(name);
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    // console.log(total);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    // console.log(total);
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <StyledWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)} // ['good', 'neutral', 'bad']
            onLeaveFeedback={this.feedbackIncrement}
          />
        </Section>
        {total ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </StyledWrapper>
    );
  }
}
