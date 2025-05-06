import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';

const DroneCard = ({ drone }) => {
  return (
    <Card
      title={`Drone ID: ${drone.id}`}
      bordered={true}
      style={{ width: '100%', marginBottom: '20px' }}
      cover={
        <img
          alt="Drone"
          src={drone.image || 'https://cdn.pixabay.com/photo/2015/11/03/09/10/question-mark-1020165_1280.jpg'}
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
  const [droneDetails, setDroneDetails] = useState({
    id: 'Loading...',
    model: 'Loading...',
    rfid: 'Loading...',
    status: 'Loading...',
    lastMaintenance: 'Loading...',
    image: '',
  });

  useEffect(() => {
    const fetchDroneDetails = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/get_rfid');
        setDroneDetails(response.data);
      } catch (error) {
        console.error('Error fetching drone details:', error);
      }
    };

    // Fetch drone details every 3 seconds
    fetchDroneDetails(); // Initial fetch
    const interval = setInterval(fetchDroneDetails, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <DroneCard drone={droneDetails} />
    </div>
  );
};

export default Homepage;