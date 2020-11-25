import * as React from 'react';
import { LoginButtonCont, IconCont } from './styles';
import { UserOutlined } from '@ant-design/icons';

const LoginButton: React.FC = () => {
  return (
    <LoginButtonCont>
      <IconCont>
        <UserOutlined />
      </IconCont>
      Ingresar/Registrarse
    </LoginButtonCont>
  );
};

export default LoginButton;
