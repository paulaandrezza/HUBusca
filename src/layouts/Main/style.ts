import { theme } from '@/app/theme/theme';
import styled from 'styled-components';

export const MainContainer = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    &:after {
      content: '';
      width: 1px;
      height: 100%;
      background-color: ${theme.colors['bg-primary']};
      position: absolute;
      top: 0;
      bottom: 0;
      right: -32px;
    }
  }
`;
