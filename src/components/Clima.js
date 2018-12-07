import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {
    
   mostrarResultado(){
    
    const {name, main, weather} = this.props.consulta;
    const kelvin = 276.15;
     if (!name || !main || !weather ) return null;
    let celsius = main.temp - kelvin;
    let tempMin = main.temp_max;
    let tempMax = main.temp_min;
    let urlIcon = `https://api.openweathermap.org/img/w/${weather[0].icon}.png`;
    return(
        <div className="row">
            <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                <div className="card-panel light-blue align-center">
                    <span className="white text resultado">
                        <h1>{name}</h1>
                        <h2>Temperatura: {celsius} &deg;C <img src={urlIcon} alt="temperatura"/></h2>
                        <h2>Temperatura min: {tempMin} &deg;C</h2>
                        <h2>Temperatura max: {tempMax} &deg;C</h2>
                    </span>

                </div>
            </div>
        </div>
    )
   }
    
    render() {
        
        
        
        return (
            <div className="container">
                
                {this.mostrarResultado()}
                
            </div>
        );
    }
}

Clima.propTypes = {
    consulta : PropTypes.object.isRequired
}

export default Clima