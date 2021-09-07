import styled from "@emotion/styled";

export const ListDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ItemLi = styled.li`
  list-style: none;
  margin: 5px;
  background-color: lightgray;
  border: 2px solid grey;
  min-width: 120px;
  font-size: 18px;
  width: auto;
`;

export const ItemP = styled.p`
  padding: 10px;
  margin: 0 20px;
  font-weight: 700;
  font-size: 28px;
`;

export const NameSpan = styled.span`
  display: block;
  pointer-events: none;
  font-weight: 500;
`;
