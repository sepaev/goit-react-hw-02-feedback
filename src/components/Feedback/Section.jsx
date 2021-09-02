import { SectionStyled, TitleH1 } from "./Feedback.styled";

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleH1>{title}</TitleH1>
      {children}
    </SectionStyled>
  );
};
