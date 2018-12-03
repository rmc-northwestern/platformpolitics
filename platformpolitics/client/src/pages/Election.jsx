import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';
import Candidate from '../components/Candidate';
import Loading from '../components/Loading';

class Election extends Component {

  constructor(props){
    super(props);
    this.state = {
      handle:'',
      race:'init',
      elections:'',
      apiSuccess:false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/get_races')
      .then(res => res.json())
      .then(elections => this.setState({elections:elections,apiSuccess:true},
        () => console.log('Elections fetched...', elections)))
      .then(() => this.populateRace());
  }

  populateRace(){
    var i;
    for (i=0; i < this.state.elections.length; i++){
      if (this.state.elections[i][0] === this.props.match.params.race){
        this.setState({
          race: this.state.elections[i]
        })
      }
    }
  }

  handleChange(event) {
    this.setState({handle: event.target.value});
  }

  render() {
    var handleURL = '/selectedCandidate/' + this.props.match.params.race + '/' + this.state.race[1] + '/' + this.state.race[2] + '/' + this.state.handle

    if (this.state.apiSuccess){
      return (
        <div>
          <Headbar backTo='/elections'/>
          <div className='electionsContainer'>
            <div className='electionsTitle'><b>{this.props.match.params.race}:</b></div>
            <div className='candidateOuterContainer'>
              <Candidate
                handle= {this.state.race[1]}
                />
              <Candidate
                handle= {this.state.race[2]}
                />
              <div className='electionsDescription'>enter a twitter handle:</div>
                <input className='electionsInput' type='text' placeholder='@i-am-a-handle...'  onChange={this.handleChange} />
              <Link to={handleURL}><button className='button1'>test your tweets</button></Link>
            </div>
          </div>
        </div>
      );
    }
    else{
      return(<Loading/>)
    }
  }
}

export default Election;
