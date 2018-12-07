import React, { Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

class App extends Component {
  state = {
    error:'',
    resultado:{},
    consulta:{}
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.resultado !== this.state.resultado){
      this.consultaApi();
    }
  }

  componentDidMount() {
    this.setState({
      error : false
    })
  }

  consultaApi(){
    const {ciudad,pais} = this.state.resultado;

    const codigo = '3b92e99ccf84ba0046979d86692e3bb4';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${codigo}`;

    if (!ciudad || !pais) { return null }
    fetch(url)
    .then(respuesta =>{
      
      return respuesta.json()
    })
    .then(data => {
      this.setState({
        consulta : data
      })
    })
    .catch(error => {
      return error
    })
  }

  consultaDatos = (clima) => {
    if (clima.ciudad === '' || clima.pais === '') {
      this.setState({
        error : true
      })
    }
    else{
      this.setState({
        resultado : clima,
        error: false
      })
    }
  }

  render() {

    const error = this.state.error;
    let resultado;
    if (error) {
    resultado =  <Error 
        mensaje = "No hay datos que consultar"
      />
    }else{
      resultado = <Clima
        consulta = {this.state.consulta}
        resultado = {this.state.resultado}
      />
    }
    
    return (
      <div className="app">
        <Header
          titulo = "CLIMA"
        />
        <Formulario
          consultaDatos = {this.consultaDatos}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
