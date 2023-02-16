import { Component } from 'react';

class EstadoEnUnClassComponet extends Component {
  constructor() {
    super();
    this.state = {
      cuenta: 1,
    };
  }

  incrementarCuenta = () => {
    this.setState({
      cuenta: this.state.cuenta + 1,
    });
  };

  decrementarCuenta = () => {
    this.setState({
      cuenta: this.state.cuenta - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Contador con class component: {this.state.cuenta}</h1>
        <hr />

        <button onClick={this.incrementarCuenta} type="button">
          +
        </button>

        <button onClick={this.decrementarCuenta} type="button">
          -
        </button>
      </div>
    );
  }
}

export default EstadoEnUnClassComponet;
