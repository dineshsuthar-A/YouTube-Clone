import React from 'react';
import Navbar from './components/Navbar'
import Allvideo from './components/Allvideo';
import Search from './components/Search';
import Watch from './components/watch/Watch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/search" component={Search} />
            <Route path="/watch/:id" component={Watch} />
            <Route path="/" component={Allvideo} />
          </Switch>
        </Router>
      </>

    )
  }
}


export default App;