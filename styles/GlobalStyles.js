import styled from "styled-components";

export const Button = styled.div`
  // flex: 0;
  border: 1px solid #2b82bf;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.color || '#000'};

  &:hover {
    cursor: pointer;
  }
`;