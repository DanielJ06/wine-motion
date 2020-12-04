import styled from 'styled-components';

export const Container = styled.div`
  background: url('/pattern.png') no-repeat center;
  background-color: ${props => props.theme.colors.bg};
  width: 32vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 25px;
`;

export const Logo = styled.img`
  width: 50%;
`;

export const Desc = styled.p`
  font-size: 41px;
  text-align: center;
  font-style: italic;
  color: #fff;
  margin-top: 50px;
`;