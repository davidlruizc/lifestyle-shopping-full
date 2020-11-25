import styled from 'styled-components';
import { device } from 'src/utils/responsiveTemplate';

export const LogoCont = styled.img`
  width: 50px;
  height: 50px;
  @media ${device.mobile} {
    width: 30px;
    height: 30px;
  }
`;
