import { SectionStyled, TitleH2 } from "./Feedback.styled";

export const Notification = ({ message }) => {
  return (
    <SectionStyled>
      <TitleH2>{message}</TitleH2>
    </SectionStyled>
  );
};
