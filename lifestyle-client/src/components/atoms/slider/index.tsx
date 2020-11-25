import * as React from 'react';
import { Slider } from 'antd';

interface ISliderAtom {
  onChangePrice: (e: any) => void;
}

const SliderAtom: React.FC<ISliderAtom> = ({ onChangePrice }) => {
  return (
    <React.Fragment>
      <Slider range defaultValue={[20, 50]} onChange={onChangePrice} tipFormatter={null} />
    </React.Fragment>
  );
};

export default SliderAtom;
