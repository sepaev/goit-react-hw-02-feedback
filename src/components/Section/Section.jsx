import { SectionStyled, TitleH1 } from "./Section.styled";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleH1>{title}</TitleH1>
      {children}
    </SectionStyled>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
