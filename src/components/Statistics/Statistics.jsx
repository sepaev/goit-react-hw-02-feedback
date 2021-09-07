import PropTypes from "prop-types";
import { ItemLi, ItemP, ListDiv, NameSpan } from "./Statistics.styled";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ListDiv>
          <ItemLi key="1">
            <ItemP>
              Good: <NameSpan>{good}</NameSpan>
            </ItemP>
          </ItemLi>
          <ItemLi key="2">
            <ItemP>
              Neutral: <NameSpan>{neutral}</NameSpan>
            </ItemP>
          </ItemLi>
          <ItemLi key="3">
            <ItemP>
              Bad: <NameSpan>{bad}</NameSpan>
            </ItemP>
          </ItemLi>
          <ItemLi key="4">
            <ItemP>
              Total: <NameSpan>{total}</NameSpan>
            </ItemP>
          </ItemLi>
          <ItemLi key="5">
            <ItemP>
              Positive precentage: <NameSpan>{positivePercentage}%</NameSpan>
            </ItemP>
          </ItemLi>
        </ListDiv>
      )}
      {total === 0 && <Notification message="No feedback" />}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
