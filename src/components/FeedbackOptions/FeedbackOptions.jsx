import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  FeedbackButtonBtn,
  NameSpan,
  ListDiv,
  ItemButtonLi,
} from "./FeedbackOptions.styled";

class FeedbackOptions extends Component {
  makeButton = (option, onLeaveFeedback) => {
    return (
      <ItemButtonLi>
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
      if (option) renderText.push(this.makeButton(option, onLeaveFeedback));
    }
    return <ListDiv>{renderText}</ListDiv>;
  }
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(["good", "neutral", "bad"]))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
