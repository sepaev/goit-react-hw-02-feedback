import PropTypes from "prop-types";
import {
  FeedbackButtonBtn,
  NameSpan,
  ListDiv,
  ItemButtonLi,
} from "./FeedbackOptions.styled";

const FeedbackOptions = ({ names, onLeaveFeedback }) => {
  return (
    <ListDiv>
      {names.map((name) => (
        <ItemButtonLi key={name}>
          <FeedbackButtonBtn type="button" id={name} onClick={onLeaveFeedback}>
            <NameSpan>{name}</NameSpan>
          </FeedbackButtonBtn>
        </ItemButtonLi>
      ))}
    </ListDiv>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(PropTypes.oneOf(["good", "neutral", "bad"]))
    .isRequired,
};
