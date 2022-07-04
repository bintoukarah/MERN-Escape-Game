import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <nav>
      <Link to="Cards">Cards</Link>
      <Link to="Rooms">Rooms</Link>
    </nav>
  );
}

export default Homepage;
