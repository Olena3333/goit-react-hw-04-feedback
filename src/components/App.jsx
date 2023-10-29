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
    // console.log(name);
    // this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
    // const { good, neutral, bad } = this.state;
    // const total = good + neutral + bad;
    // // console.log(total);
    // return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Number(((good / total) * 100).toFixed(2));

    // const { good } = this.state;
    // const total = this.countTotalFeedback();
    // // console.log(total);
    // return Math.round((good / total) * 100) || 0;
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

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   // ['good', 'neutral', 'bad']

//   feedbackIncrement = name => {
//     // console.log(name);
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     // console.log(total);
//     return total;
//   };
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     // console.log(total);
//     return Math.round((good / total) * 100) || 0;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     return (
//       <StyledWrapper>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)} // ['good', 'neutral', 'bad']
//             onLeaveFeedback={this.feedbackIncrement}
//           />
//         </Section>
//         {total ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={total}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </StyledWrapper>
//     );
//   }
// }
