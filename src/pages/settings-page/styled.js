import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.spacer}px;
`;

export const Option = styled.option`
 font-size: ${({ theme }) => theme.fontSizes.md}px;
 border: ${({ theme }) => theme.borderWidth}px solid ${({ theme }) => theme.borderColor};
 background-color: ${({ theme }) => theme.headerBackgroundColor};
 color: ${({ theme }) => theme.headerTextColor};
 &:focus {
    color: ${({ theme }) => theme.headerBackgroundColor};
     background-color: ${({ theme }) => theme.colors.headerTextColor};
  }
`;

export const Select = styled.select`
  width:  ${({ theme }) => theme.spacer * 30}px;
  height: ${({ theme }) => theme.spacer * 9}px;
  margin-bottom: ${({ theme }) => theme.spacer * 2}px;
  padding: ${({ theme }) => theme.spacer * 2}px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  border: ${({ theme }) => theme.borderWidth}px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  color: ${({ theme }) => theme.headerTextColor};
  text-align: center;
`;

export const SelectLabel = styled.label`
  color: ${({ theme }) => theme.textSecondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  padding-bottom: ${({ theme }) => theme.spacer}px;
`;

export const Title = styled.p`
  padding: ${({ theme }) => theme.spacer * 4}px;
  font-size: ${({ theme }) => theme.fontSizes.xxxl}px;
  color: ${({ theme }) => theme.textColor};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;