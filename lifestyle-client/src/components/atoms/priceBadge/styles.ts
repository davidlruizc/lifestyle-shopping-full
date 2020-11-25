import styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BoxWrapperPrice = styled.div`
  padding: 13px 4px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContent = styled(Text)``;

export const DividerContainer = styled.div`
  width: 10%;
  border: 1px solid black;
  margin: 14px 0;
`;
