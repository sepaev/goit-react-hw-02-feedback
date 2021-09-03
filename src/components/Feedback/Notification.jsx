import { SectionStyled, TitleH2 } from "./Feedback.styled";
import PropTypes from "prop-types";

export const Notification = ({ message }) => {
  return (
    <SectionStyled>
      <TitleH2>{message}</TitleH2>
    </SectionStyled>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
