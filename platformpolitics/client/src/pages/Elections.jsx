import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';

class Elections extends Component {

  constructor() {
    super();
    this.state = {
      elections: []
    };
  }

  componentDidMount() {
    fetch('/api/get_races')
      .then(res => res.json())
      .then(elections => this.setState({elections}, () => console.log('Elections fetched...', elections)));
  }

  render() {
    const electionsList = this.state.elections.map((election, i)=>{
      const electionName = election[0]
      var link = '/election/' + electionName
      return(
        <Link key = {i} to={link}>
          <div className='electionsListElement'>{electionName}</div>
        </Link>
      )
    })

    return (
      <div>
        <Headbar backTo='/'/>
        <div className='electionsContainer'>
          <div className='electionsTitle'>current elections:</div>
          <div className='electionsListContainer'>{electionsList}</div>
          <Link to='/newelection'><button className='button1'>build new model</button></Link>
        </div>
      </div>
    );
  }
}

export default Elections;
