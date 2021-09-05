import React, { Component } from "react";
import PropTypes from "prop-types";
import { ItemLi, ItemP, ListDiv, NameSpan } from "./Statistics.styled";

class Statistics extends Component {
  countPositiveFeedback = (total, good) => {
    const result = (parseInt(good) * 100) / total;
    return total ? parseInt(result.toFixed(0)) + "%" : "0%";
  };

  getRenderArray = (data) => {
    const total = Object.values(data).reduce(
      (counter, value) => (counter += value),
      0
    );
    const { good, neutral, bad } = data;
    return [
      { name: "Good", value: good },
      { name: "Neutral", value: neutral },
      { name: "Bad", value: bad },
      { name: "Total", value: total },
      {
        name: "Positive feedback",
        value: this.countPositiveFeedback(total, good),
      },
    ];
  };
  render() {
    const { data } = this.props;
    const toRenderArray = this.getRenderArray(data);
    return (
      <ListDiv>
        {toRenderArray.map(({ name, value }) => (
          <ItemLi key={name.split(" ")[0]}>
            <ItemP>
              <NameSpan>{name}:</NameSpan>
              {value}
            </ItemP>
          </ItemLi>
        ))}
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
