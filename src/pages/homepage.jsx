import React from 'react';
import { Card } from 'antd';

const DroneCard = ({ drone }) => {
  return (
    <Card
      title={`Drone ID: ${drone.id}`}
      bordered={true}
      style={{ width: '100%', marginBottom: '20px' }}
      cover={
        <img
          alt="Drone"
          src="https://leagueofitems.com/images/items/256/6662.webp"
          style={{ objectFit: 'cover', height: '200px' }}
        />
      }
    >
      <p><strong>Model:</strong> {drone.model}</p>
      <p><strong>RFID:</strong> {drone.rfid}</p>
      <p><strong>Status:</strong> {drone.status}</p>
      <p><strong>Last Maintenance:</strong> {drone.lastMaintenance}</p>
    </Card>
  );
};

const Homepage = () => {
  const droneDetails = {
    id: 'DR12345',
    model: 'DJI Phantom 4',
    rfid: 'RFID-987654321',
    status: 'Active',
    lastMaintenance: '2025-04-15',
  };

  return (
    <div style={{ padding: '20px' }}>
      <DroneCard drone={droneDetails} />
    </div>
  );
};

export default Homepage;