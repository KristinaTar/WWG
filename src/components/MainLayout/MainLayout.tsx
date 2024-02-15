import React from 'react';

type Props = {
  children?: React.ReactNode
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      Layout
      {children}
    </div>
  );
}

export default MainLayout;