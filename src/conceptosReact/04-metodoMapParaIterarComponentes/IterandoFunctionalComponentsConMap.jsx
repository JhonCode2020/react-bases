import { useState } from 'react';

const TareaDelDia = (props) => {
  return <li key={props.tarea.id}>{props.tarea.nombre}</li>;
};

const IterandoFunctionalComponentsConMap = () => {
  const [tareasDelDia] = useState([
    {
      id: 1,
      nombre: 'Limpiar la casa',
    },
    {
      id: 2,
      nombre: 'Pasear el perro',
    },
    {
      id: 3,
      nombre: 'Hacer ejercicio',
    },
  ]);

  return (
    <div>
      <h1>Iteracion de functional components con metodo map</h1>
      <hr />

      <h2>Tareas del dia por hacer</h2>

      <ul>
        {tareasDelDia.map((tarea) => {
          return <TareaDelDia tarea={tarea} />;
        })}
      </ul>
    </div>
  );
};

export default IterandoFunctionalComponentsConMap;
