import React,{Component} from 'react';
import apple from './apple.jpg';
import './App.css';
import { Albums } from './components/albums';
import NavBar from './components/Navbar';

class App extends Component {

  render() {
      return (
        <div className="App">
          {/*  */}
          <img className='apple' src = {apple} alt ="logo-apple"/>
          <div >
                <NavBar /><br></br>
            </div>
          
          <Albums/>
        </div>
      );
    }
}

export default App;
