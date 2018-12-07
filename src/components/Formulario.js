import React,{Component} from 'react';

 class Formulario extends Component {
    
    pais = React.createRef();
    ciudad = React.createRef();

    consultaDatos = (e) => {
        e.preventDefault();
        const clima = {
            ciudad : this.ciudad.current.value,
            pais : this.pais.current.value
        }
        this.props.consultaDatos(clima);
    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.consultaDatos}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.ciudad} id="ciudad"/>
                                <label htmlFor="ciudad">Ciudad</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.pais} id="pais">
                                    <option defaultValue>Seleccione un pais</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES"> España</option>
                                    <option value="PE"> Perú</option>
                                    <option value="MX"> Mexico</option>
                                    <option value="US"> Estados Unidos</option>
                                </select>
                                <label htmlFor="pais">Pais</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input type="submit" className="waves-effect waves-light btn-large magenta accent-4"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Formulario