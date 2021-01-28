// React library import
import React, { Component } from 'react';
// Route component import
import { Link, Route, Switch } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
//Pages
import Login from '../Login/Login'
import Register from '../Register/Register'
import Profile from '../Profile/Profile'
import Pictures from '../../components/pictures/Pictures'
import Favorites from '../Photos/Photos'
import Settings from '../Settings/Settings'

//CSS
import './App.css';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    
    return (
      <div className="App">
        <div className='App-header-footer'>
        <header>S W I P E &nbsp;&nbsp;&nbsp; R I G H T</header>
        </div> <br/>
        <Router>
          <Switch> 
            <Route exact path='/login' render={(...props) =>
              <Login/>
            }/>
            <Route path='/register' render={(...props) =>
              <Register />
            }/>
          </Switch>
        </Router>
            {/* <Login />
            <Register />
            <Profile />
            <Pictures />
            <Favorites />
            <Settings /> */}
     </div>
    );
  }
}

export default App



// function App() {
//   return (
//     <div className="App">
//       <Pictures />
//       <Favorites />
//       <Profile />
//       <Register />
//     </div>
//   );
// }

// {this.state.instructions ?
//   <Portal>
//     <div className='portal'>
//       <h1>Testing</h1>
//       <p></p>
//       <button onClick={this.toggleInstructions}>Close</button>
//       <img/>
//     </div>
//   </Portal>
//   : ''
//   }
//   <header className='App-header-footer'>R E A C T &nbsp;&nbsp;&nbsp;  M A S T E R M I N D</header>
  
//   <Switch>
//     <Route exact path='/' render={() => 
//       <GamePage
//           toggleInstructions={this.toggleInstructions} 
//           winTries={winTries}
//           colors={colors}
//           selColorIdx={this.state.selColorIdx}
//           guesses={this.state.guesses}
//           handleColorSelection={this.handleColorSelection}
//           handleNewGameClick={this.handleNewGameClick}
//           handlePegClick={this.handlePegClick}
//           handleScoreClick={this.handleScoreClick}
//       />
//     } />
//   <Route path='/settings' render={(props) => 
//       <SettingsPage {...props}/>
//     } />
//   </Switch>


