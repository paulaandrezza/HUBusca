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

export const Button = styled.button`
  background: ${theme.colors['button-color']};
  padding: 0.625rem 0.75rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  border: none;
  color: ${theme.colors['text-button']};
  font-weight: ${theme.fontWeights.subtitle};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors['button-hover']};
  }

  &:active {
    background-color: ${theme.colors['button-active']};
  }
`;
