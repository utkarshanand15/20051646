import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainCard from '../components/TrainCard';

const SingleTrainPage = ({ match }) => {
  const [train, setTrain] = useState(null);
  const trainNumber = match.params.trainNumber;

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`);
        setTrain(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrain();
  }, [trainNumber]);

  return (
    <div>
      {train ? <TrainCard train={train} /> : <p>Loading...</p>}
    </div>
  );
};

export default SingleTrainPage;
