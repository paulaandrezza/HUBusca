import styled from 'styled-components';
import { theme } from './theme';

export const Title = styled.h1`
  color: ${theme.colors['text-primary']};
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.bold};
`;

export const Text = styled.p`
  color: ${theme.colors['text-secondary']};
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeights.normal};
`;
