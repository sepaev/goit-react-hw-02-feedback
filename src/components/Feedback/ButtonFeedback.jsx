import { Component } from "react";
import { FeedbackButton, ItemLi, ListDiv } from "./Feedback.styled";

export class ButtonFeedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  addFeedback = (e) => {
    console.dir(this.state);
    const text = e.target.id;
    this.setState((prevState) => {
      return {
        good: text === "good" ? ++prevState.good : prevState.good,
        neutral: text === "neutral" ? ++prevState.neutral : prevState.neutral,
        bad: text === "bad" ? ++prevState.bad : prevState.bad,
      };
    });
  };

  render() {
    return (
      <ListDiv>
        <ItemLi>
          <FeedbackButton type="button" onClick={this.addFeedback} id="good">
            Good
          </FeedbackButton>
        </ItemLi>
        <ItemLi>
          <FeedbackButton type="button" onClick={this.addFeedback} id="neutral">
            Neutral
          </FeedbackButton>
        </ItemLi>
        <ItemLi>
          <FeedbackButton type="button" onClick={this.addFeedback} id="bad">
            Bad
          </FeedbackButton>
        </ItemLi>
      </ListDiv>
    );
  }
}
