import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resumo from './components/Resumo/Resumo'
import MenuSuperior from './components/MenuSuperior/MenuSuperior'

class App extends Component {
  render() {
    return (
        <div>
          <MenuSuperior />
          <Resumo />
        </div>
    );
  }
}
export default App;
