import * as React from 'react';
import { NavActions, NavActionCont, CustomHeaderResponsive } from './styles';
import Logo from 'src/components/atoms/logo';
import { Input, Drawer, Menu } from 'antd';
import CartButton from 'src/components/atoms/iconButtons/cartButton';
import ListButton from 'src/components/atoms/iconButtons/listButton';
import LoginButton from 'src/components/atoms/loginButton';
import { CATEGORIES } from 'src/utils/constants';

const { Search } = Input;

interface ResponsiveNavBarProps {
  onSearch: (value: string) => void;
  onChangeCategory: (category: string) => void;
}

const ResponsiveNavBar: React.FC<ResponsiveNavBarProps> = ({ onSearch, onChangeCategory }) => {
  const [drawerVisible, setDrawerVisible] = React.useState<boolean>(false);

  const onToggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const setOnSelect = ({ key }: any) => {
    onChangeCategory(key);
  };

  return (
    <CustomHeaderResponsive className="header">
      <Drawer placement="left" closable={false} onClose={onToggleDrawer} visible={drawerVisible}>
        <Menu defaultSelectedKeys={[CATEGORIES.ACCESSORY]} mode="inline" onSelect={setOnSelect}>
          <Menu.Item key={CATEGORIES.ACCESSORY}>Accesorios para carros</Menu.Item>
          <Menu.Item key={CATEGORIES.LIFESTYLE}>Lifestyle</Menu.Item>
          <Menu.Item key={CATEGORIES.OFFERS}>Ofertas</Menu.Item>
          <Menu.Item key={CATEGORIES.NEW}>Novedades</Menu.Item>
        </Menu>
        <LoginButton />
      </Drawer>
      <NavActionCont>
        <ListButton onClick={onToggleDrawer} />
      </NavActionCont>
      <NavActions>
        <NavActionCont>
          <Search
            placeholder="Buscar..."
            onSearch={(value) => onSearch(value)}
            style={{ width: 200 }}
          />
        </NavActionCont>
        <NavActionCont>
          <CartButton />
        </NavActionCont>
        <NavActionCont>
          <Logo />
        </NavActionCont>
      </NavActions>
    </CustomHeaderResponsive>
  );
};

export default ResponsiveNavBar;
