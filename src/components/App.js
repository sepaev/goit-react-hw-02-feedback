import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countPositiveFeedback = (total, good) => {
    const result = (parseInt(good) * 100) / total;
    return total ? parseInt(result.toFixed(0)) : 0;
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (counter, value) => (counter += value),
      0
    );
  };

  onLeaveFeedback = (e) => {
    const key = e.target.id;
    this.setState((prevState) => {
      return { [key]: ++prevState[key] };
    });
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback(total, good);
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <hr />
        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
