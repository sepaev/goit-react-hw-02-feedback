import { Component } from "react";
import {
  FeedbackButton,
  ItemLi,
  ListDiv,
  Section,
  TitleH1,
  ItemP,
} from "./Feedback.styled";

export class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  titleFeedback = "Please leave feedback";
  titleStatistics = "Statistics";

  addFeedback = (e) => {
    const text = e.target.id;
    this.setState((prevState) => {
      return {
        good: text === "good" ? ++prevState.good : prevState.good,
        neutral: text === "neutral" ? ++prevState.neutral : prevState.neutral,
        bad: text === "bad" ? ++prevState.bad : prevState.bad,
      };
    });
  };

  countTotalFeedback = () => {
    let counter = 0;
    Object.keys(this.state).forEach((key) => {
      counter += this.state[key];
    });
    // console.log(counter);
    return counter;
  };

  countPositiveFeedbackPercentage = () => {
    const total = parseInt(this.countTotalFeedback());
    const result = (parseInt(this.state.good) * 100) / total;
    return result ? parseFloat(result).toFixed(0) : 0;
  };

  render() {
    return (
      <Section>
        <TitleH1>{this.titleFeedback}</TitleH1>
        <ListDiv>
          <ItemLi>
            <FeedbackButton type="button" onClick={this.addFeedback} id="good">
              Good
            </FeedbackButton>
          </ItemLi>
          <ItemLi>
            <FeedbackButton
              type="button"
              onClick={this.addFeedback}
              id="neutral"
            >
              Neutral
            </FeedbackButton>
          </ItemLi>
          <ItemLi>
            <FeedbackButton type="button" onClick={this.addFeedback} id="bad">
              Bad
            </FeedbackButton>
          </ItemLi>
        </ListDiv>
        <TitleH1>{this.titleStatistics}</TitleH1>
        <ListDiv>
          <ItemLi>
            <ItemP>Good: {this.state.good}</ItemP>
          </ItemLi>
          <ItemLi>
            <ItemP>Neutral: {this.state.neutral}</ItemP>
          </ItemLi>
          <ItemLi>
            <ItemP>Bad: {this.state.bad}</ItemP>
          </ItemLi>
          <ItemLi>
            <ItemP>Total: {this.countTotalFeedback()}</ItemP>
          </ItemLi>
          <ItemLi>
            <ItemP>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </ItemP>
          </ItemLi>
        </ListDiv>
      </Section>
    );
  }
}
