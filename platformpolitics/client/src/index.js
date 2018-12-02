import React from 'react';
import ReactDOM from 'react-dom';
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
        <Route exact path="/election/:race" component={Election}/>
        <Route exact path="/selectedCandidate/:race/:handle" component={SelectedCandidate}/>
        <Route exact path='/thankyou' component={ThankYou}/>
      </div>
    )
  }

}

ReactDOM.render(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>, document.getElementById('root'));
