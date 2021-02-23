import React from 'react';
import Passenger from './Passenger';
import Roadinfo from './Roadinfo';

function Info() {
  return (
    <div className="infocard">
      <Passenger />
      <Roadinfo />
    </div>
  );
}

export default Info;
