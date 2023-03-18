import { useState } from 'react';
export const useCounter = (initialState: number) => {

  const [value, setvalue] = useState(initialState);

  const handleCounter = (valueToAdd: number) => {
    setvalue( value + valueToAdd );
  }

  return {
    value,
    handleCounter
  }
};
