import * as React from 'react';
import BreadCrumb from 'src/components/atoms/breadCrumb';
import Title from 'src/components/atoms/title';

const SideMenu: React.FC<ISideMenuMoleculeProps> = ({ title }) => {
  return (
    <React.Fragment>
      <BreadCrumb />
      <Title title={title} />
    </React.Fragment>
  );
};

export default SideMenu;
