import PropTypes from "prop-types";
import {
  FeedbackButtonBtn,
  NameSpan,
  ListDiv,
  ItemButtonLi,
} from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListDiv>
      {options.map((option) => (
        <ItemButtonLi key={option}>
          <FeedbackButtonBtn
            type="button"
            id={option}
            onClick={onLeaveFeedback}
          >
            <NameSpan>{option}</NameSpan>
          </FeedbackButtonBtn>
        </ItemButtonLi>
      ))}
    </ListDiv>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(["good", "neutral", "bad"]))
    .isRequired,
};
