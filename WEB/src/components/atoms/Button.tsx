import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;

  display: inline-block;
  text-decoration: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.background};
    border-color: ${(props) => props.theme.colors.white};
  }
`;

export default Button;
