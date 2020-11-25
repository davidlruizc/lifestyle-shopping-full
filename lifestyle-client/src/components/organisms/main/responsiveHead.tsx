import * as React from 'react';
import { Typography, Modal, Menu } from 'antd';
import { MobileContainer, ButtonStyled, LeftWrapper, RightWrapper } from './styles';
import { categoryOptions } from 'src/utils/resources';
import ColorPalette from 'src/components/molecules/colorPalette';
import SliderMolecule from 'src/components/molecules/sliderPrice';

const { Title } = Typography;
const { SubMenu } = Menu;

interface IResponsiveHead {
  onOpenModal: () => void;
  modal: boolean;
  onChangePrice: (e: any) => void;
  priceValues: number[];
}

const ResponsiveHead: React.FC<IResponsiveHead> = ({
  onOpenModal,
  modal,
  onChangePrice,
  priceValues,
}) => {
  return (
    <MobileContainer>
      <LeftWrapper>
        <Title level={2} style={{ margin: 0 }}>
          Lifestyle
        </Title>
      </LeftWrapper>
      <RightWrapper>
        <ButtonStyled
          type="text"
          style={{ fontWeight: 'bold', fontSize: 12, alignItems: 'center' }}
          onClick={onOpenModal}>
          Ver filtros
        </ButtonStyled>
      </RightWrapper>
      <Modal
        title="Filtros"
        visible={modal}
        onOk={onOpenModal}
        onCancel={onOpenModal}
        style={{ width: '100%' }}>
        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
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
      </Modal>
    </MobileContainer>
  );
};

export default ResponsiveHead;
