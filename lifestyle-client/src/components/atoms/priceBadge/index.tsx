import * as React from 'react';
import { PriceContainer, BoxWrapperPrice, TextContent, DividerContainer } from './styles';

interface IPriceBadgeProps {
  firstPrice: number;
  secondPrice: number;
}

const PriceBadge: React.FC<IPriceBadgeProps> = ({ firstPrice, secondPrice }) => {
  return (
    <PriceContainer>
      <BoxWrapperPrice>
        <TextContent disabled>$ {(firstPrice * 10000).toLocaleString()}</TextContent>
      </BoxWrapperPrice>
      <DividerContainer />
      <BoxWrapperPrice>
        <TextContent disabled>$ {(secondPrice * 10000).toLocaleString()}</TextContent>
      </BoxWrapperPrice>
    </PriceContainer>
  );
};

export default PriceBadge;
