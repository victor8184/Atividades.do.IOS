import './App.css';
import { Component } from 'react';
import BoasVindas from './Componentes/BoasVindas';
import Sobre from './Componentes/Sobre';


export class App extends Component {
  render() {
    return (
      <div className="App" >
        <BoasVindas />
        <Sobre />
      </div>
    );
  }
}

export default App;