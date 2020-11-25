import * as React from 'react';
import { CustomHeader, CustomMenu, NavActions, NavActionCont } from './styles';
import Logo from 'src/components/atoms/logo';
import { Input } from 'antd';
import UserButton from 'src/components/atoms/iconButtons/userButton';
import CartButton from 'src/components/atoms/iconButtons/cartButton';
import { CATEGORIES } from 'src/utils/constants';

const { Search } = Input;

interface DesktopNavBarProps {
  onSearch: (value: string) => void;
  onChangeCategory: (category: string) => void;
}

const DesktopNavBar: React.FC<DesktopNavBarProps> = ({ onSearch, onChangeCategory }) => {
  const setOnSelect = ({ key }: any) => {
    onChangeCategory(key);
  };

  return (
    <CustomHeader className="header">
      <CustomMenu
        mode="horizontal"
        defaultSelectedKeys={[CATEGORIES.ACCESSORY]}
        onSelect={setOnSelect}>
        <CustomMenu.Item key={CATEGORIES.ACCESSORY}>Accesorios para carros</CustomMenu.Item>
        <CustomMenu.Item key={CATEGORIES.LIFESTYLE}>Lifestyle</CustomMenu.Item>
        <CustomMenu.Item key={CATEGORIES.OFFERS}>Ofertas</CustomMenu.Item>
        <CustomMenu.Item key={CATEGORIES.NEW}>Novedades</CustomMenu.Item>
      </CustomMenu>
      <NavActions>
        <NavActionCont>
          <Search
            placeholder="Buscar..."
            onSearch={(value) => onSearch(value)}
            style={{ width: 200 }}
          />
        </NavActionCont>
        <NavActionCont>
          <UserButton />
        </NavActionCont>
        <NavActionCont>
          <CartButton />
        </NavActionCont>
        <NavActionCont>
          <Logo />
        </NavActionCont>
      </NavActions>
    </CustomHeader>
  );
};

export default DesktopNavBar;
