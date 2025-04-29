import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import Homepage from './pages/homepage';
import DroneList from './pages/dronelist';
import CompanyPage from './pages/companypage';

const items = [
  {
    label: 'Drop Zone',
    key: 'drop_zone',
    icon: <MailOutlined />,
  },
  {
    label: 'Drone List',
    key: 'drone_list',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'UAV Fleet Management',
    key: 'uav_fleet_management',
    icon: <SettingOutlined />,
  },
];

const App = () => {
  const [current, setCurrent] = useState('drop_zone');

  const onClick = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const renderContent = () => {
    switch (current) {
      case 'drop_zone':
        return <Homepage />;
      case 'drone_list':
        return <DroneList />;
      case 'uav_fleet_management':
        return <CompanyPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <div style={{ marginTop: '20px' }}>{renderContent()}</div>
    </>
  );
};

export default App;
