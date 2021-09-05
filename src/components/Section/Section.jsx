import { SectionStyled, TitleH1 } from "./Section.styled";
import { Component } from "react";
import Notification from "../Notification/Notification";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import PropTypes from "prop-types";

class Section extends Component {
  render() {
    const { title, data, component, onLeaveFeedback } = this.props;

    return (
      <SectionStyled>
        <TitleH1>{title}</TitleH1>
        {component === "Notification" && (
          <Notification message="No feedback given" />
        )}
        {component === "FeedbackOptions" && (
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={Object.keys(data)}
          />
        )}
        {component === "Statistics" && <Statistics data={data} />}
      </SectionStyled>
    );
  }
}
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func,
  data: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
