import React, { Component } from "react";
import { ItemLi, ItemP, NameSpan, ListDiv } from "./Feedback.styled";

class Statistics extends Component {
  renderItem = (name, counter, sign = "") => {
    return (
      <ItemLi>
        <ItemP>
          <NameSpan>{name}</NameSpan>: {counter + sign}
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
