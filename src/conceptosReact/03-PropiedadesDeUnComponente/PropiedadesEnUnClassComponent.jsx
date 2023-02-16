import { Component } from 'react';

class Persona extends Component {
  render() {
    return (
      <div>
        <h1>
          Hola me llamo {this.props.nombre} y tengo {this.props.edad} años
        </h1>

        {this.props.estaEstudiando ? (
          <h2>Actualemente estoy estudiando</h2>
        ) : (
          <h2>Actualemente NO estoy estudiando</h2>
        )}

        {this.props.tieneMacota ? (
          <Mascota datosDeLaMascota={this.props.datosDeLaMascota} />
        ) : (
          <h3>No tengo mascota</h3>
        )}
      </div>
    );
  }
}

class Mascota extends Component {
  render() {
    return (
      <div>
        <h2>
          Tengo un {this.props.datosDeLaMascota.tipo} que se llama{' '}
          {this.props.datosDeLaMascota.nombre}
        </h2>

        <h2>
          {this.props.datosDeLaMascota.nombre} tiene{' '}
          {this.props.datosDeLaMascota.edad} años
        </h2>
      </div>
    );
  }
}

class PropiedadesEnUnClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Propiedades en un class component</h1>
        <hr />

        <Persona
          nombre="Pepito"
          edad={20}
          estaEstudiando={false}
          tieneMacota
          datosDeLaMascota={{
            tipo: 'Gato',
            nombre: 'Pelusa',
            edad: 3,
          }}
        />
      </div>
    );
  }
}

export default PropiedadesEnUnClassComponent;
