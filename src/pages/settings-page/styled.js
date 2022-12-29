import styled from 'styled-components';
import { select } from '@styles/components';
import { borderWidth, fontSizes, margins, paddings } from '@styles/sizes';

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: ${paddings.md}px;
`;

export const Option = styled.option`
  font-size: ${fontSizes.md}px;
  border: ${borderWidth}px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.header.backgroundColor};
  color: ${({ theme }) => theme.header.textColor};
`;

export const Select = styled.select`
  width: ${select.width}px;
  height: ${select.height}px;
  margin-bottom: ${margins.xl}px;
  padding: ${paddings.xl}px;
  font-size: ${fontSizes.md}px;
  border: ${({ theme }) => (theme.currentTheme === 'dark' ? borderWidth : 0)}px
    solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.header.backgroundColor};
  color: ${({ theme }) => theme.header.textColor};
  text-align: center;
  cursor: pointer;
`;

export const SelectLabel = styled.label`
  color: ${({ theme }) => theme.text.secondaryColor};
  font-size: ${fontSizes.md}px;
  padding-bottom: ${paddings.md}px;
`;

export const Title = styled.p`
  padding: ${paddings.xxxl}px;
  font-size: ${fontSizes.xxxl}px;
  color: ${({ theme }) => theme.text.color};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
