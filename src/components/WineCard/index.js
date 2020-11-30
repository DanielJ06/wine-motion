import React from 'react';

import { 
  Container,
  Box,
  Info,
  WineCover,
  Title,
  Desc
} from './styles';

const WineCard = ({ wine }) => {
  return (
    <Container>
      <Box>
        <WineCover src={wine.cover} />
      </Box>
      <Info>
        <Title>{wine.name}</Title>
        <Desc>{wine.grape}, {wine.alcoholContent}, {wine.winery}</Desc>
      </Info>
    </Container>
  );
}

export default WineCard;