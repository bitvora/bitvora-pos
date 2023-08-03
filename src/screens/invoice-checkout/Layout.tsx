import React from 'react';
import {StoreContextProvider} from '../../context/StoreContext';

const Layout = ({children}: {children: React.ReactNode}) => {
  return <StoreContextProvider>{children}</StoreContextProvider>;
};

export default Layout;
