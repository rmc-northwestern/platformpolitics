import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

// PAGE IMPORTS
import App from './App';
import Elections from './pages/Elections';
import Election from './pages/Election';
import NewElection from './pages/NewElection';
import SelectedCandidate from './pages/SelectedCandidate';
import ThankYou from './pages/ThankYou';

class Routes extends React.Component {

  render(){

    return(
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/elections" component={Elections}/>
        <Route exact path="/newelection" component={NewElection}/>
        <Route exact path="/election" component={Election}/>
        <Route exact path="/selectedCandidate" component={SelectedCandidate}/>
        <Route exact path='/thankyou' component={ThankYou}/>
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
