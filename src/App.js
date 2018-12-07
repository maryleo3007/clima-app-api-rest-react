import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

class App extends Component {
  state = {}

  consultaDatos = (clima) => {
    console.log(clima)
  }

  render() {
    
    return (
      <div className="app">
        <Header
          titulo = "CLIMA"
        />
        <Formulario
          consultaDatos = {this.consultaDatos}
        />
      </div>
    );
  }
}

export default App;
