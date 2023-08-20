import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 32px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const FollowInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;
