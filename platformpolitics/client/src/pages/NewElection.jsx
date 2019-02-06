import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import { Link } from 'react-router-dom';

class NewElection extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      h1:'',
      h2:''
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeH1 = this.handleChangeH1.bind(this);
    this.handleChangeH2 = this.handleChangeH2.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeH1(event) {
    this.setState({h1: event.target.value});
  }

  handleChangeH2(event) {
    this.setState({h2: event.target.value});
  }

  render() {
    var nextURL = '/thankyou/' + this.state.name + '/' + this.state.h1 + '/' + this.state.h2
    return (
      <div>
        <Headbar backTo='/'/>
        <div className='electionsContainer'>
          <div className='electionsTitle'>build a new election model:</div>
          <br/><br/>
          <div className='electionsDescription'>Name your election model:</div>
          <input className='electionsInput' type='text' placeholder='name...' onChange={this.handleChangeName} />

          <div className='electionsDescription'>candidate 1 twitter handle:</div>
          <input className='electionsInput' type='text' placeholder='@i-am-a-handle...' onChange={this.handleChangeH1} />

          <div className='electionsDescription'>candidate 2 twitter handle:</div>
          <input className='electionsInput' type='text' placeholder='@i-too-am-a-handle...' onChange={this.handleChangeH2} />
          <br/>
          <Link to={nextURL}><button className='button1'>build model</button></Link>
        </div>
      </div>
    );
  }
}

export default NewElection;
