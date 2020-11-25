import * as React from 'react';
import {
  ImageLogo,
  Text,
  LeftContainer,
  RightContainer,
  Container,
  TitleCard,
  ButtonCart,
  MainWrapper,
  UnderText,
  IconPlus,
  IconCart
} from './styles';

const Card: React.FC<ItemCard> = ( {discount, name, photo, price, subcategory} ) => {
  return (
    <MainWrapper>
      <ImageLogo src={require('src/assets/images/' + photo)} />
      <TitleCard level={5}>{name}</TitleCard>
      <Container>
        <LeftContainer>
          <Text>{subcategory}</Text>
          <UnderText>${(price + discount).toLocaleString()}</UnderText>
          <TitleCard level={5}>${(price - discount).toLocaleString()}</TitleCard>
        </LeftContainer>
        <RightContainer>
          <ButtonCart
            type="primary"
            icon={
              <React.Fragment>
                <IconCart/>
                <IconPlus/>
              </React.Fragment>
            }
          />
        </RightContainer>
      </Container>
    </MainWrapper>
  );
}

export default Card;