import React from 'react';
import { Menu } from 'antd';
import { Items } from './Navigator.item';
const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="Navbar-right">
            <Menu theme="light" mode="horizontal" items={Items} style={{ fontSize: '17px' }}/>
        </div>
    </div>
  );
};

export default Navbar;