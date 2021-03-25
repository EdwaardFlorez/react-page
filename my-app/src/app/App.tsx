import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { render } from '@testing-library/react';

class App extends React.Component{
  render(){
    return (
        <div>
          <HeaderComponent></HeaderComponent>        
        </div>
    );
  }
}

export default App;
