import React from 'react';
import { BrowserRouter, Route, BrowserHistory } from 'react-router-dom';
import { Header } from './components';
import { AsidebarContainer, UserContainer, GroupContainer } from './containers';

const App = () => (
  <BrowserRouter>
    <div>
      <Header title="User Management System" />
      <AsidebarContainer />
      <hr/>
      <Route path="/users" header="Users Management" component={UserContainer} />
      <Route path="/groups" header="Groups Management" component={GroupContainer} />
    </div>
  </BrowserRouter>
)



export default App;
