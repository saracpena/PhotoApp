// React library import
import React, { Component } from "react";
// Route & Redirect component import  i.e. localhost:3000/register
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Pages
import LoginHeader from '../LoginHeader/LoginHeader';
import LoginFooter from '../LoginFooter/LoginFooter';
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import Posts from "../Posts/Posts";
import Likes from "../Likes/Likes";
import Settings from "../Settings/Settings";
import Pictures from '../../Images/Pictures'

//CSS
import "./App.css";

class App extends Component {
  state={
    loggedIn:false
  }

  LogUser = () => {
    this.setState({loggedIn:!this.state.loggedIn})
  } 


  render() {
    return (
      <div className="App">
          <LoginHeader />
        <Router>
        {/* <Route path="/likes" component={Likes} /> */}
          <Switch>
          {/* <Route path='/login' /> */}
            <Route path='/login'>
              <LoginHeader />
            </Route>
            <Route exact path="/" render={(props) => <Login {...props} LogUser={this.LogUser} />} /> 
            <Route
              path="/register"
              render={(props) => <Register {...props} LogUser={this.LogUser}/>}
            />
            <Route path="/register">
              <Redirect to="/" />
            </Route>
            
            {/* <Route path="/Home" component={Home} /> */}
            <Route path="/posts" component={Posts} />
            {/* <Route path="/likes" component={Likes} /> */}
            <Route path='/likes' component={Likes} />
            <Route path="/settings" component={Settings} />
          </Switch>
          { this.state.loggedIn ? <Home LogUser={this.LogUser}/> : <Redirect to='/'/>} 
        </Router>
        <LoginFooter />
      </div>
    );
  }
}

export default App;

{
  /* <Login />
            <Register />
            <Home />
            <Pictures />
            <Likes />
            <Settings /> */
}
// function App() {
//   return (
//     <div className="App">
//       <Pictures />
//       <Likes />
//       <Home />
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
