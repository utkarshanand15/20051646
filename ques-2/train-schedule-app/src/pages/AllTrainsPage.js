import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainList from '../components/TrainList';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/train/trains');
        setTrains(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>All Trains Schedule</h2>
      <TrainList trains={trains} />
    </div>
  );
};

export default AllTrainsPage;
