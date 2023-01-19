import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 786px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Grid;
