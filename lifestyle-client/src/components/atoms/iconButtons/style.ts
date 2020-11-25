import styled from 'styled-components';
import { device } from 'src/utils/responsiveTemplate';

export const IconButtonCont = styled.div`
  font-size: 20px;
  width: 50px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.2s;
  @media ${device.mobile} {
    width: 25px;
    font-size: 18px;
  }
`;
