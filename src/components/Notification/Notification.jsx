import { SectionStyled, TitleH2 } from "./Notification.styled";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <SectionStyled>
      <TitleH2>{message}</TitleH2>
    </SectionStyled>
  );
};
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
