import * as React from 'react';
import DesktopNavBar from './desktopNavBar';
import ResponsiveNavBar from './responsiveNavBar';

interface NavBarProps {
  onSearchCategory: (id: string) => void;
  onTypingSearch: (text: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSearchCategory, onTypingSearch }) => {
  return (
    <React.Fragment>
      <DesktopNavBar onSearch={onTypingSearch} onChangeCategory={onSearchCategory} />
      <ResponsiveNavBar onSearch={onTypingSearch} onChangeCategory={onSearchCategory} />
    </React.Fragment>
  );
};

export default NavBar;
