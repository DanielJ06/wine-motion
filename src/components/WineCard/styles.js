import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Box = styled.div`
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 110px;
  height: 125px;
  border-radius: 35px 10px;
  margin: 35px 0;
`;

export const WineCover = styled.img`
  width: 90px;
  height: 125px;
  transform: translateY(-15px);
  transition: ease transform 0.5s;

  &:hover {
    transform: translateY(-25px);
  }
`;

export const Info = styled.div`
  margin-left: 25px;
  max-width: 300px;
`;

export const Title = styled.p`
  font-size: 21px;
  font-weight: bold;
`;

export const Desc = styled.p`
  font-size: 21px;
  font-style: italic;
`;