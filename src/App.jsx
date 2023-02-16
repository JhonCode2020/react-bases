import ClassComponent from './conceptosReact/01-tiposDeComponentes/ClassComponent';
import FunctionalComponent from './conceptosReact/01-tiposDeComponentes/FunctionalComponent';

import PropiedadesEnUnClassComponent from './conceptosReact/03-PropiedadesDeUnComponente/PropiedadesEnUnClassComponent';
import PropiedadesEnUnFunctionalComponent from './conceptosReact/03-PropiedadesDeUnComponente/PropiedadesEnUnFunctionalComponent';

import EstadoEnUnClassComponent from './conceptosReact/02-EstadoEnReact/EstadoEnUnClassComponent';
import EstadoEnUnFunctionalComponent from './conceptosReact/02-EstadoEnReact/EstadoEnUnFunctionalComponent';

const App = () => {
  return (
    <div>
      <ClassComponent />
      <FunctionalComponent />

      <PropiedadesEnUnClassComponent />
      <PropiedadesEnUnFunctionalComponent />

      <EstadoEnUnClassComponent />
      <EstadoEnUnFunctionalComponent />
    </div>
  );
};

export default App;
