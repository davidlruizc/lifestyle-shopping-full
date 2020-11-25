import * as React from 'react';
import { IconButtonCont } from './style';
import { UnorderedListOutlined } from '@ant-design/icons';

interface ListButtonProps {
  onClick?: () => void;
}

const ListButton: React.FC<ListButtonProps> = ({ onClick }) => {
  return (
    <IconButtonCont onClick={onClick}>
      <UnorderedListOutlined />
    </IconButtonCont>
  );
};

export default ListButton;
