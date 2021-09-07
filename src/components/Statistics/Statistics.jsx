import PropTypes from "prop-types";
import { ItemLi, ItemP, ListDiv, NameSpan } from "./Statistics.styled";
import Notification from "../Notification/Notification";

const Statistics = (props) => {
  const stats = Object.keys(props);
  return (
    <>
      {props.total > 0 && (
        <ListDiv>
          {stats.map((stat) => (
            <ItemLi key={stat}>
              <ItemP>
                {stat !== "positivePercentage" ? stat : "Positive precentage"}
                {": "}
                <NameSpan>
                  {props[stat]}
                  {stat === "positivePercentage" && "%"}
                </NameSpan>
              </ItemP>
            </ItemLi>
          ))}
        </ListDiv>
      )}
      {props.total === 0 && <Notification message="No feedback" />}
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
