import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Paragraph, Title } = Typography;

export const IconPlus = styled(PlusOutlined)`
  font-size: 7px;
`;

export const IconCart = styled(ShoppingCartOutlined)`
  font-size: 18px;
`;

export const ImageLogo = styled.img`
  width: 280px;
  height: 236px;
  margin-bottom: 10px;
`;

export const Text = styled(Paragraph)`
  font-size: 0.8em;
  margin-bottom: 0.01em !important;
  width: 100%;
  color: #929292 !important;
  text-transform: capitalize;
`;

export const UnderText = styled(Paragraph)`
  font-size: 0.8em;
  margin-bottom: 0.01em !important;
  width: 100%;
  color: #929292 !important;
  text-decoration: line-through;
`;

export const TitleCard = styled(Title)`
  font-size: 1.2em;
  margin: 0 !important;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LeftContainer = styled.div`
  width: 101%;
`;

export const RightContainer = styled.div`
  width: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.h4`
  font-size: 1em;
`;

export const ButtonCart = styled(Button)`
  color: white;
  min-width: 50px;
  min-height: 45px;
  background-color: #1c69d4; !important;
`;

export const MainWrapper = styled.div`
  max-width: 18em;
  min-width: 15em;
  margin: 20px;
`;