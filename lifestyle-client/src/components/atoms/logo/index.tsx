import * as React from 'react';
import LogoImage from 'src/assets/images/logo.png';
import { LogoCont } from './styles';

const Logo: React.FC = () => {
  return <LogoCont src={LogoImage} />;
};

export default Logo;
