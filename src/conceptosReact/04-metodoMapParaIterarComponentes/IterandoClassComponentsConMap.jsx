import { Component } from 'react';

class TareaDelDia extends Component {
  render() {
    return <li key={this.props.tarea.id}>{this.props.tarea.nombre}</li>;
  }
}

class IterandoClassComponentsConMap extends Component {
  constructor() {
    super();

    this.state = {
      tareasDelDia: [
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
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Iteracion de class components con metodo map</h1>
        <hr />

        <h2>Tareas del dia por hacer</h2>

        <ul>
          {this.state.tareasDelDia.map((tarea) => {
            return <TareaDelDia tarea={tarea} />;
          })}
        </ul>
      </div>
    );
  }
}

export default IterandoClassComponentsConMap;
