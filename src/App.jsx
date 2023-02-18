import ClassComponent from './conceptosReact/01-tiposDeComponentes/ClassComponent';
import FunctionalComponent from './conceptosReact/01-tiposDeComponentes/FunctionalComponent';

import PropiedadesEnUnClassComponent from './conceptosReact/03-PropiedadesDeUnComponente/PropiedadesEnUnClassComponent';
import PropiedadesEnUnFunctionalComponent from './conceptosReact/03-PropiedadesDeUnComponente/PropiedadesEnUnFunctionalComponent';

import EstadoEnUnClassComponent from './conceptosReact/02-EstadoEnReact/EstadoEnUnClassComponent';
import EstadoEnUnFunctionalComponent from './conceptosReact/02-EstadoEnReact/EstadoEnUnFunctionalComponent';

import IterandoClassComponentsConMap from './conceptosReact/04-metodoMapParaIterarComponentes/IterandoClassComponentsConMap';
import IterandoFunctionalComponentsConMap from './conceptosReact/04-metodoMapParaIterarComponentes/IterandoFunctionalComponentsConMap';

const App = () => {
  return (
    <div>
      <ClassComponent />
      <FunctionalComponent />

      <PropiedadesEnUnClassComponent />
      <PropiedadesEnUnFunctionalComponent />

      <EstadoEnUnClassComponent />
      <EstadoEnUnFunctionalComponent />

      <IterandoClassComponentsConMap />
      <IterandoFunctionalComponentsConMap />
    </div>
  );
};

export default App;
