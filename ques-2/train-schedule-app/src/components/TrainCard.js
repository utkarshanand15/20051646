import React from 'react';

const TrainCard = ({ train }) => {
  return (
    <div className="train-card">
      <h3>{train.trainName}</h3>
      <p>Train Number: {train.trainNumber}</p>
      <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
      <p>Sleeper Seats Available: {train.seatsAvailable.sleeper}</p>
      <p>AC Seats Available: {train.seatsAvailable.AC}</p>
      <p>Price for Sleeper: {train.price.sleeper}</p>
      <p>Price for AC: {train.price.AC}</p>
      <p>Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
};

export default TrainCard;
