import React, { Component } from "react";
import PropTypes from "prop-types";
import { ItemLi, ItemP, NameSpan, ListDiv } from "./Statistics.styled";

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

  countPositiveFeedbackPercentage = (total, good) => {
    const result = (parseInt(good) * 100) / total;
    return total ? parseInt(result.toFixed(0)) : 0;
  };

  render() {
    const { data } = this.props;
    const { good, neutral, bad } = data;
    const total = Object.values(data).reduce(
      (counter, value) => (counter += value),
      0
    );
    return (
      <ListDiv>
        {this.renderItem("good", good)}
        {this.renderItem("neutral", neutral)}
        {this.renderItem("bad", bad)}
        {this.renderItem("total", total)}
        {this.renderItem(
          "positive feedback",
          this.countPositiveFeedbackPercentage(total, good),
          "%"
        )}
      </ListDiv>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  data: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
