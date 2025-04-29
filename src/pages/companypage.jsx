import React from 'react';
import { Card, Row, Col, List } from 'antd';

const FleetCard = ({ fleet }) => {
  return (
    <Card
      title={`Fleet Name: ${fleet.name}`}
      bordered={true}
      style={{ width: '100%', marginBottom: '20px' }}
    >
      <p><strong>Manager:</strong> {fleet.manager}</p>
      <p><strong>Location:</strong> {fleet.location}</p>
      <p><strong>Total Drones:</strong> {fleet.drones.length}</p>
      <List
        header={<strong>Drones in Fleet</strong>}
        bordered
        dataSource={fleet.drones}
        renderItem={(drone) => (
          <List.Item>
            <strong>ID:</strong> {drone.id} | <strong>Model:</strong> {drone.model} | <strong>Status:</strong> {drone.status}
          </List.Item>
        )}
      />
    </Card>
  );
};

const CompanyPage = () => {
  const fleets = [
    {
      name: 'Alpha Fleet',
      manager: 'John Doe',
      location: 'New York',
      drones: [
        { id: 'DR12345', model: 'DJI Phantom 4', status: 'Active' },
        { id: 'DR67890', model: 'DJI Mavic Air 2', status: 'Inactive' },
      ],
    },
    {
      name: 'Beta Fleet',
      manager: 'Jane Smith',
      location: 'San Francisco',
      drones: [
        { id: 'DR11223', model: 'Parrot Anafi', status: 'Active' },
        { id: 'DR44556', model: 'Autel EVO II', status: 'Under Maintenance' },
        { id: 'DR77889', model: 'Skydio 2', status: 'Active' },
      ],
    },
    {
      name: 'Gamma Fleet',
      manager: 'Alice Johnson',
      location: 'Chicago',
      drones: [
        { id: 'DR99001', model: 'Yuneec Typhoon H', status: 'Inactive' },
      ],
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {fleets.map((fleet) => (
          <Col xs={24} sm={12} md={8} key={fleet.name}>
            <FleetCard fleet={fleet} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CompanyPage;