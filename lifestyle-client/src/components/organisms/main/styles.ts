import styled from 'styled-components';
import { Layout, Button } from 'antd';
import { device } from 'src/utils/responsiveTemplate';

const { Sider } = Layout;

export const SliderMainContainer = styled(Sider)`
  @media ${device.mobile} {
    display: none;
  }
`;

export const LayoutStyled = styled(Layout)`
  padding: 0 24px 24px;
  background: #fff;
  @media ${device.mobile} {
    padding: 0;
  }
`;

export const MobileContainer = styled.div`
  display: none;
  @media ${device.mobile} {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
`;

export const LeftWrapper = styled.div`
  width: 70%;
  display: flex;
  align-self: center;
  justify-content: flex-start;
`;

export const RightWrapper = styled.div`
  width: 30%;
  display: flex;
  align-self: center;
  justify-content: flex-end;
`;

export const ButtonStyled = styled(Button)`
  display: flex;
  align-self: center;
  justify-content: flex-end;
`;
