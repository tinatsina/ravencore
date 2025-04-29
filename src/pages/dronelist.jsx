import React from 'react';
import { Card, Row, Col } from 'antd';

const images = [
  'https://leagueofitems.com/images/items/128/6653.webp',
  'https://leagueofitems.com/images/items/256/6662.webp',
  'https://leagueofitems.com/images/items/128/3742.webp',
  'https://leagueofitems.com/images/items/128/6657.webp',
  'https://leagueofitems.com/images/items/128/6672.webp',
];

const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const DroneCard = ({ drone }) => {
  return (
    <Card
      title={`Drone ID: ${drone.id}`}
      bordered={true}
      style={{ width: '100%', marginBottom: '20px' }}
      cover={
        <img
          alt="Drone"
          src={getRandomImage()}
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

const DroneList = () => {
  const drones = [
    { id: 'DR12345', model: 'DJI Phantom 4', rfid: 'RFID-987654321', status: 'Active', lastMaintenance: '2025-04-15' },
    { id: 'DR67890', model: 'DJI Mavic Air 2', rfid: 'RFID-123456789', status: 'Inactive', lastMaintenance: '2025-03-10' },
    { id: 'DR11223', model: 'Parrot Anafi', rfid: 'RFID-456789123', status: 'Active', lastMaintenance: '2025-04-01' },
    { id: 'DR44556', model: 'Autel EVO II', rfid: 'RFID-789123456', status: 'Under Maintenance', lastMaintenance: '2025-02-20' },
    { id: 'DR77889', model: 'Skydio 2', rfid: 'RFID-321654987', status: 'Active', lastMaintenance: '2025-04-20' },
    { id: 'DR99001', model: 'Yuneec Typhoon H', rfid: 'RFID-654987321', status: 'Inactive', lastMaintenance: '2025-01-15' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {drones.map((drone) => (
          <Col xs={24} sm={12} md={8} key={drone.id}>
            <DroneCard drone={drone} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default DroneList;