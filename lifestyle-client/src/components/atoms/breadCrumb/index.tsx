import * as React from 'react';
import { Breadcrumb } from 'antd';
import { MainBreadCrumb } from './styles';

const BreadCrumb = () => {
  return (
    <MainBreadCrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Lifestyle</Breadcrumb.Item>
    </MainBreadCrumb>
  );
};

export default BreadCrumb;
