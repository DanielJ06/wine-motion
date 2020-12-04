import React from 'react';

import { Container, Logo, Desc } from './styles';

const SideBar = () => {
  return (
    <Container>
      <Logo src="/logo.png" />
      <Desc>
        Elegance & taste<br/> of a <strong>best wine</strong>
      </Desc>
    </Container>
  );
}

export default SideBar;