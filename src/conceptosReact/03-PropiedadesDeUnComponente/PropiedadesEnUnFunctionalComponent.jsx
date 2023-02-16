const Mascota = (props) => {
  return (
    <div>
      <h2>
        Tengo un {props.datosDeLaMascota.tipo} que se llama{' '}
        {props.datosDeLaMascota.nombre}
      </h2>

      <h2>
        {props.datosDeLaMascota.nombre} tiene {props.datosDeLaMascota.edad} años
      </h2>
    </div>
  );
};

const Persona = (props) => {
  return (
    <div>
      <h1>
        Hola me llamo {props.nombre} y tengo {props.edad} años
      </h1>

      {props.estaEstudiando ? (
        <h2>Actualemente estoy estudiando</h2>
      ) : (
        <h2>Actualemente NO estoy estudiando</h2>
      )}

      {props.tieneMacota ? (
        <Mascota datosDeLaMascota={props.datosDeLaMascota} />
      ) : (
        <h3>No tengo mascota</h3>
      )}
    </div>
  );
};

const PropiedadesEnUnFunctionalComponent = () => {
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
};

export default PropiedadesEnUnFunctionalComponent;
