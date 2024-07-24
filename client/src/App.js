import React from 'react';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import AddUser from './addUser';
import Login from './login';

function App() {
  return (
    <Router>
      <div>
        <BrowserRouter>
          <Route path="/login" component={Login} />
          <Route exact path="/addUser" component={AddUser} />
        </BrowserRouter>
      </div>
    </Router>
  );
}

export default App;