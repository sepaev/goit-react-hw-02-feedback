import React, { Component } from "react";
import {
  FeedbackButtonBtn,
  NameSpan,
  ListDiv,
  ItemButtonLi,
} from "./Feedback.styled";

class FeedbackOptions extends Component {
  makeButton = (option, onLeaveFeedback) => {
    return (
      <ItemButtonLi key={option}>
        <FeedbackButtonBtn type="button" id={option} onClick={onLeaveFeedback}>
          <NameSpan>{option}</NameSpan>
        </FeedbackButtonBtn>
      </ItemButtonLi>
    );
  };

  render() {
    let renderText = [];
    const { options, onLeaveFeedback } = this.props;
    for (let option of options) {
      renderText.push(this.makeButton(option, onLeaveFeedback));
    }
    return <ListDiv>{renderText}</ListDiv>;
  }
}
export default FeedbackOptions;
