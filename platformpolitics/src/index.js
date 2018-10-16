import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

// PAGE IMPORTS
import App from './App';
import Home from './components/Home';
import Elections from './pages/Elections';
import NewElection from './pages/NewElection';

class Routes extends React.Component {

  render(){

    return(
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/elections" component={Elections}/>
        <Route exact path="/newelection" component={NewElection}/>
      </div>
    )
  }

}

ReactDOM.render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
