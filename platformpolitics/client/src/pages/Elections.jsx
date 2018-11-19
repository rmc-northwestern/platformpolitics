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
    fetch('/api/elections')
      .then(res => res.json())
      .then(elections => this.setState({elections}, () => console.log('Elections fetched...', elections)));
  }

  render() {
    const electionsList = this.state.elections.map((election)=>{
      return(
        <Link to='/election'>
          <div className='electionsListElement'>{election}</div>
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
