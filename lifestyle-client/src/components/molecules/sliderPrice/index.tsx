import * as React from 'react';
import Slider from 'src/components/atoms/slider';
import PriceBadge from 'src/components/atoms/priceBadge';
import { SliderPriceContainer } from './styles';

interface ISliderPriceProps {
  onChangePrice: (e: any) => void;
  priceValues: number[];
}

const SliderPrice: React.FC<ISliderPriceProps> = ({ onChangePrice, priceValues }) => {
  return (
    <SliderPriceContainer>
      <Slider onChangePrice={onChangePrice} />
      <PriceBadge firstPrice={priceValues[0]} secondPrice={priceValues[1]} />
    </SliderPriceContainer>
  );
};

export default SliderPrice;
