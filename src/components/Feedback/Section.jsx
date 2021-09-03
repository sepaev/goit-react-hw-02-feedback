import { SectionStyled, TitleH1 } from "./Feedback.styled";
import PropTypes from "prop-types";

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleH1>{title}</TitleH1>
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
