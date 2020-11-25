import * as React from 'react';

import { ContainerSquare } from './styles';

interface IColorProps {
  color: string;
  border?: any;
}

const Color: React.FC<IColorProps> = ({ color, border }) => {
  return <ContainerSquare color={color} borderColor={border} />;
};

export default Color;
