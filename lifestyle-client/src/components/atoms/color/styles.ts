import styled from 'styled-components';

export const ContainerSquare = styled.div`
  width: 20px;
  height: 20px;
  border: ${(props) => (props.borderColor ? `2px solid black` : `10px solid ${props.color}`)};
  margin: 7px;
`;
