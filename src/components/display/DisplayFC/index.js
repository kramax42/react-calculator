import React from 'react';
import { useSelector } from 'react-redux';

import { DisplayStyled, Entry, Expression } from '../styled';

function DisplayFC() {
  const entry = useSelector((state) => state.calculator.entry);
  const expression = useSelector((state) => state.calculator.expression);

  return (
    <DisplayStyled>
      <Expression id="expressionDisplay">{expression || '0'}</Expression>
      <Entry id="entryDisplay">{entry || '0'}</Entry>
    </DisplayStyled>
  );
}

export const Display = DisplayFC;
