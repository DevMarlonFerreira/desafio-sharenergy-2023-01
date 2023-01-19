import styled, { css } from "styled-components";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0 10px 0;
    justify-content: space-between;

    ${(props: any) =>
        props.key % 2 == 0 &&
        css`
        background-color: red;
      `
    }
`;

export default Row;
