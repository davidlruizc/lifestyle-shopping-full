import * as React from 'react';
import { Layout, Menu } from 'antd';
import SideMenuLayout from 'src/components/molecules/sideMenu';
import { categoryOptions } from 'src/utils/resources';
import ColorPalette from 'src/components/molecules/colorPalette';
import SliderMolecule from 'src/components/molecules/sliderPrice';
import { SliderMainContainer, LayoutStyled } from './styles';
import ResponsiveHead from './responsiveHead';

const { SubMenu } = Menu;
const { Content } = Layout;

import 'antd/dist/antd.css';
import 'src/assets/styles/index.css';
import Card from 'src/components/atoms/card';

interface IMainPageProps {
  onChangePrice: (e: any) => void;
  priceValues: number[];
  onOpenModal: () => void;
  modal: boolean;
  data: [];
}

const MainPage: React.FC<IMainPageProps> = ({ onChangePrice, priceValues, onOpenModal, modal, data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Layout>
          <SliderMainContainer width={262} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}>
              <SideMenuLayout title="Lifestyle" />
              <SubMenu key="sub1" title="Categorías">
                {categoryOptions.map((value: IOption) => (
                  <Menu.Item key={value.id}>{value.value}</Menu.Item>
                ))}
              </SubMenu>
              <SubMenu key="sub2" title="Colores">
                <ColorPalette />
              </SubMenu>
              <SubMenu key="sub3" title="Precio">
                <SliderMolecule onChangePrice={onChangePrice} priceValues={priceValues} />
              </SubMenu>
            </Menu>
          </SliderMainContainer>
          <LayoutStyled>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}>
              <ResponsiveHead
                onOpenModal={onOpenModal}
                modal={modal}
                onChangePrice={onChangePrice}
                priceValues={priceValues}
              />
              {data.map((value: ItemCard) => {
                return <Card key={value.id} {...value} />;
              })}
            </Content>
          </LayoutStyled>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default MainPage;
