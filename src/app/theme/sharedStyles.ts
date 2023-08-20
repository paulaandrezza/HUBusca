import styled from 'styled-components';
import { theme } from './theme';

export const Title = styled.h1`
  color: ${theme.colors['text-primary']};
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.normal};
`;

interface TextProps {
  $textSmall?: boolean;
}

export const Text = styled.p<TextProps>`
  color: ${theme.colors['text-secondary']};
  font-size: ${({ $textSmall }) =>
    $textSmall ? theme.fontSizes.small : theme.fontSizes.normal};
  font-weight: ${theme.fontWeights.normal};
`;

export const Button = styled.a`
  background: ${theme.colors['button-color']};
  padding: 0.625rem 0.75rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.button};
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

interface ChipProps {
  $language: string;
}

export const Chip = styled.div<ChipProps>`
  background: ${({ $language }) =>
    theme.languageColor[$language] || theme.colors['button-color']};
  padding: 0.625rem 0.75rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.button};
  border: none;
  color: ${theme.colors['text-button']};
  font-weight: ${theme.fontWeights.subtitle};
`;

export const AnchorContainer = styled.a`
  background-color: ${theme.colors['bg-primary']};
  border-radius: ${theme.borderRadius.card};
  width: 100%;
  height: 100%;
  padding: 16px 32px;

  display: flex;
  gap: 32px;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${theme.colors['button-hover']};
  }

  &:active {
    background-color: ${theme.colors['button-active']};
  }
`;

export const BoxContainer = styled.div`
  background-color: ${theme.colors['bg-primary']};
  border-radius: ${theme.borderRadius.card};
  width: 100%;
  height: 100%;
  padding: 16px 32px;

  display: flex;
  gap: 32px;
`;

interface WrapperProps {
  $biggerGap?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ $biggerGap }) => ($biggerGap ? '16px' : '8px')};
`;

export const WrapperRow = styled.div<WrapperProps>`
  display: flex;
  align-items: flex-start;
  gap: ${({ $biggerGap }) => ($biggerGap ? '64px' : '4px')};
  color: ${theme.colors['text-secondary']};
  flex-wrap: wrap;
`;

export const WrapperArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 64px;
`;

export const WrapperBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeaderContainer = styled.div`
  grid-area: header;
`;

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
      right: -16px;
    }
  }

  @media screen and (min-width: 1024px) {
    &:after {
      right: -32px;
    }
  }
`;
