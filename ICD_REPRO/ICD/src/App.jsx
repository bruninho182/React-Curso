import { useState } from 'react';
import { Layout, Tabs } from 'antd';
//import Logo from './components/Logo'
import MenuList from './components/MenuList';
import Form from './components/Form';
import Header from './components/Header';


const { Sider, Main } = Layout;
function App() {
  return (
      
      <Layout>
        <Sider className="sidebar">
          <MenuList />
        </Sider>
       
        <body>
          <div className='header'>
          <Header />  
          </div>
        <div></div>
        <Form className='form' />  
        </body>
 </Layout>
);
}

export default App; 