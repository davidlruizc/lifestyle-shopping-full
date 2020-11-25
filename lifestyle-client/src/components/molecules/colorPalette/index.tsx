import * as React from 'react';
import Color from 'src/components/atoms/color';
import { Row } from 'antd';

const ColorPalette = () => {
  return (
    <Row
      gutter={[16, 16]}
      style={{ marginTop: 13, marginRight: 34, marginBottom: 34, marginLeft: 34 }}>
      <Color color="#333333" />
      <Color color="#F2994A" />
      <Color color="#EB5757" />
      <Color color="#27AE60" />
      <Color color="#2F80ED" />
      <Color color="#56CCF2" />
      <Color color="#C4C4C4" />
      <Color color="white" border />
    </Row>
  );
};

export default ColorPalette;
