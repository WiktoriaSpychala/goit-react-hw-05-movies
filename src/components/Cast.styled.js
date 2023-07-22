import styled from 'styled-components';

export const CastWrapper = styled.div`
  display: flex;
  padding: 5px 5px;
`;
export const CastList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const CastItem = styled.li`
  display: flex;
  list-style: none;
  gap: 5px;
  flex-direction: column;
  font-size: 13px;
  align-items: center;
  justify-content: center;
`;

export const CastImg = styled.img`
  border-radius: 6px;
`;
