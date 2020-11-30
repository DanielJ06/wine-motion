import React, { useState } from 'react';
import WineCard from '../WineCard';
import winesData from '../../service/wine.json';

import { 
  Container,
  Title,
  BoldLabel,
} from './styles';

const Main = () => {
  const [wines, setWines] = useState(winesData);

  return (
    <Container>
      <div style={{ marginBottom: 50 }} >
        <Title>Choose your <BoldLabel>Wine</BoldLabel></Title>
      </div>

      {wines.map(wine => (
        <WineCard wine={wine} />
      ))}
    </Container>
  );
}

export default Main;