import * as React from 'react';
import { Typography } from 'antd';
import { Container } from './styles';

const { Title } = Typography;

const MainTitle: React.FC<IMainTitleProps> = ({ title }) => {
  return (
    <Container>
      <Title level={2}>{title}</Title>
    </Container>
  );
};

export default MainTitle;
