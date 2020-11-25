import * as React from 'react';
import { IconButtonCont } from './style';
import { UserOutlined } from '@ant-design/icons';

const UserButton: React.FC = () => {
  return (
    <IconButtonCont>
      <UserOutlined />
    </IconButtonCont>
  );
};

export default UserButton;
