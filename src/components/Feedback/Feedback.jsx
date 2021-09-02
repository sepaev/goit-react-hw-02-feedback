import { Component, Fragment } from "react";
import FeedbackOptions from "./FeedbackOptions ";
import Statistics from "./Statistics";
import { Section } from "./Section";
import { Notification } from "./Notification";

export class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = (e) => {
    const key = e.target.id;
    this.setState((prevState) => {
      return { [key]: ++prevState[key] };
    });
  };

  countTotalFeedback = () => {
    let counter = 0;
    Object.keys(this.state).forEach((key) => {
      counter += this.state[key];
    });
    return counter;
  };

  countPositiveFeedbackPercentage = (total) => {
    const result = (parseInt(this.state.good) * 100) / total;
    return total ? result.toFixed(0) : 0;
  };

  getStaticChildren = () => {
    const total = this.countTotalFeedback();
    return total ? (
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={total}
        positivePercentage={this.countPositiveFeedbackPercentage(total)}
      />
    ) : (
      <Notification message="No feedback given" />
    );
  };

  getFeedbackChildren = () => {
    return (
      <FeedbackOptions
        onLeaveFeedback={this.onLeaveFeedback}
        options={Object.keys(this.state)}
      />
    );
  };

  render() {
    return (
      <Fragment>
        <Section
          title="Please leave feedback"
          children={this.getFeedbackChildren()}
        />
        <hr />
        <Section title="Statistics" children={this.getStaticChildren()} />
      </Fragment>
    );
  }
}
