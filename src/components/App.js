import { Component, Fragment } from "react";
import Section from "./Section/Section";

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onLeaveFeedback = (e) => {
    const key = e.target.id;
    this.setState((prevState) => {
      return { [key]: ++prevState[key] };
    });
  };

  render() {
    const total = Object.values(this.state).reduce(
      (counter, value) => (counter += value),
      0
    );
    return (
      <Fragment>
        <Section
          title="Please leave feedback"
          component="FeedbackOptions"
          onLeaveFeedback={this.onLeaveFeedback}
          data={this.state}
        />
        <hr />
        <Section
          title="Statistics"
          component={total ? "Statistics" : "Notification"}
          data={this.state}
        />
      </Fragment>
    );
  }
}
