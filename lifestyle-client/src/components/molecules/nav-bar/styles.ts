import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { device } from 'src/utils/responsiveTemplate';

const { Header } = Layout;

export const CustomHeader = styled(Header)`
  padding: 0;
  display: flex;
  background-color: white;
  justify-content: space-between;
  @media ${device.mobile} {
    display: none;
  }
`;

export const CustomMenu = styled(Menu)`
  padding-left: 40px;
  padding-right: 15px;
`;

export const NavActions = styled.div`
  padding-left: 15px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  @media ${device.mobile} {
    padding: 0;
    justify-content: end;
  }
`;

export const NavActionCont = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const CustomHeaderResponsive = styled(Header)`
  display: none;
  padding: 0;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobile} {
    display: flex;
  }
`;
