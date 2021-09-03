import React, { Component } from "react";
import PropTypes from "prop-types";
import { ItemLi, ItemP, NameSpan, ListDiv } from "./Feedback.styled";

class Statistics extends Component {
  renderItem = (name, counter, sign = "") => {
    return (
      <ItemLi>
        <ItemP>
          <NameSpan>{name}:</NameSpan>
          {counter + sign}
        </ItemP>
      </ItemLi>
    );
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ListDiv>
        {this.renderItem("good", good)}
        {this.renderItem("neutral", neutral)}
        {this.renderItem("bad", bad)}
        {this.renderItem("total", total)}
        {this.renderItem("positive feedback", positivePercentage, "%")}
      </ListDiv>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
