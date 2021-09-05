import styled from "@emotion/styled";

export const FeedbackButtonBtn = styled.button`
  background-color: antiquewhite;
  padding: 10px;
  min-width: 150px;
  height: 50px;
  font-size: 18px;
  margin: 20px;
  border-radius: 20px;
  filter: drop-shadow(2px 4px 6px black);
`;

export const NameSpan = styled.span`
  display: block;
  text-transform: capitalize;
  pointer-events: none;
  font-weight: 500;
  font-size: 18px;
`;

export const ListDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ItemButtonLi = styled.li`
  list-style: none;
  margin: 5px;
`;
