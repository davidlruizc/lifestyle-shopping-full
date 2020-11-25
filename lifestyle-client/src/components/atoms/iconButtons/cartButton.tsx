import * as React from 'react';
import { IconButtonCont } from './style';
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartButton: React.FC = () => {
  return (
    <IconButtonCont>
      <ShoppingCartOutlined />
    </IconButtonCont>
  );
};

export default CartButton;
