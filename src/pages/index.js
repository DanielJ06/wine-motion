import React from 'react';

import Main from '../components/Main';
import Sidebar from '../components/SideBar';



const Home = () => {
  return (
    <div 
      style={{ 
        display: "flex", 
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100vh'
    }}>
      <Main />
      <Sidebar />
    </div>
  );
}

export default Home;