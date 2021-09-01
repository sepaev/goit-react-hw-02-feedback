import { Section, TitleH1, ListDiv, ItemLi, ItemP } from "./Statistics.styled";

function Statistics({ good = 0, neutral = 0, bad = 0 }) {
  return (
    <Section>
      <TitleH1>Statistics</TitleH1>
      <ListDiv>
        <ItemLi>
          <ItemP>Good: {good}</ItemP>
        </ItemLi>
        <ItemLi>
          <ItemP>Neutral: {neutral}</ItemP>
        </ItemLi>
        <ItemLi>
          <ItemP>Bad: {bad}</ItemP>
        </ItemLi>
      </ListDiv>
    </Section>
  );
}

export default Statistics;
