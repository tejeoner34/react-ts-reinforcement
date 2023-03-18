import { useCounter } from '../hooks/useCounter';
export const Contador = () => {
  const {value, handleCounter} = useCounter(0);

  return (
    <>
      <h3>Contador: {value}</h3>

      <button onClick={() => handleCounter(-1)} className="btn btn-primary">
        -1
      </button>
      <button onClick={() => handleCounter(1)} className="btn btn-primary">
        +1
      </button>
    </>
  );
};
