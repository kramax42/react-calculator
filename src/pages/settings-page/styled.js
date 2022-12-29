import { borderWidth, fontSizes, spacer } from '@styles/sizes';
import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: ${spacer}px;
`;

export const Option = styled.option`
  font-size: ${fontSizes.md}px;
  border: ${borderWidth}px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.header.backgroundColor};
  color: ${({ theme }) => theme.header.textColor};
`;

export const Select = styled.select`
  width: ${spacer * 30}px;
  height: ${spacer * 9}px;
  margin-bottom: ${spacer * 2}px;
  padding: ${spacer * 2}px;
  cursor: pointer;
  font-size: ${fontSizes.md}px;
  border: ${({ theme }) => (theme.currentTheme === 'dark' ? borderWidth : 0)}px
    solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.header.backgroundColor};
  color: ${({ theme }) => theme.header.textColor};
  text-align: center;
`;

export const SelectLabel = styled.label`
  color: ${({ theme }) => theme.text.secondaryColor};
  font-size: ${fontSizes.md}px;
  padding-bottom: ${spacer}px;
`;

export const Title = styled.p`
  padding: ${spacer * 4}px;
  font-size: ${fontSizes.xxxl}px;
  color: ${({ theme }) => theme.text.color};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
