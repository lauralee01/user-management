import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Users from './views/Users';
import Groups from './views/Groups';

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [{id: 1, name:"Laura", isActive: true},
              {id: 2, name:"Joshua", isActive: true},
              {id: 3, name:"Janine", isActive: true}
      ],
      groups: [{id:1, name: "Admins", users:[1,2]},
              {id:1, name: "Devs", users:[1]}
      ],
      configuration: {showUsers: false}
    }
  }

  generateId = () => Math.floor(Math.random()*1000)

  getState = (stateKey: '') => {
    const isStateKey = this.state.hasOwnProperty(stateKey);
    if (stateKey) {
      return this.state[stateKey];
    } else {
      return this.state;
    }
  };

  updateState = (cb = () => {}) => {
    this.setState(cb);
  };
    render() {
      return (
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/">Main</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/groups">Groups</Link></li>
            </ul>

            <hr />
            
              <Route exact path="/" render={() => ( <Main /> )} />
              <Route path="/users" render={() => ( <Users getState={this.getState} updateState={this.updateState} generateId={this.generateId} /> )} />
              <Route path="/groups" render={() => ( <Groups getState={this.getState} updateState={this.updateState} generateId={this.generateId} /> )}/>
              
           
           </div>
        </BrowserRouter>
      );
    }
  }




export default App;
