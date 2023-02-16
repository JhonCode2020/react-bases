import { useState } from 'react';

const EstadoEnUnFunctionalComponent = () => {
  const [cuenta, setCuenta] = useState(0);

  const incrementarCuenta = () => {
    setCuenta(cuenta + 1);
  };

  const decrementarCuenta = () => {
    setCuenta(cuenta - 1);
  };

  return (
    <div>
      <h1>Contador con functional component: {cuenta}</h1>
      <hr />

      <button onClick={incrementarCuenta} type="button">
        +
      </button>

      <button onClick={decrementarCuenta} type="button">
        -
      </button>
    </div>
  );
};

export default EstadoEnUnFunctionalComponent;
