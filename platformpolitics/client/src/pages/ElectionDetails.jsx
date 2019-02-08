import React, { Component } from 'react';
import Headbar from '../components/Headbar';
import CandidateDetails from '../components/CandidateDetails';
import Loading from '../components/Loading';

class ElectionDetails extends Component {

  constructor(props){
    super(props);
    this.state = {
      handle:'',
      race:'init',
      elections:'',
      details:null,
      apiSuccess:false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const race = this.props.match.params.race
    const apiURL = '/api/get_model_details/' + race
    fetch(apiURL)
      .then(res => res.json())
      .then(details => this.setState({details:{details},apiSuccess:true}))
    fetch('/api/get_races')
      .then(res => res.json())
      .then(elections => this.setState({elections}))
      .then(() => this.populateRace())
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

  renderModelSize(){
    if (this.state.details.details.size){
      return(<div>Trained on <b>{this.state.details.details.size}</b> Twitter users per candidate</div>)
    }
  }

  handleChange(event) {
    this.setState({handle: event.target.value});
  }

  render() {
    var handleURL = '/selectedCandidate/' + this.props.match.params.race + '/' + this.state.race[1] + '/' + this.state.race[2] + '/' + this.state.handle
    var backURL = '/election/' + this.props.match.params.race
    if (this.state.apiSuccess){
      return (
        <div>
          <Headbar backTo={backURL}/>
          <div className='electionsContainer'>
            <div className='electionsTitle'><b>{this.props.match.params.race} DETAILS:</b></div>
            <div>Model Created at <b>{this.state.details.details.time}</b></div>
            {this.renderModelSize()}
            <br/><br/>
            <div className='candidateOuterContainer'>
              <CandidateDetails
                handle= {this.state.race[1]}
                words = {this.state.details.details.most_common_words[1]}
                />
              <CandidateDetails
                handle= {this.state.race[2]}
                words = {this.state.details.details.most_common_words[0]}
                />
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

export default ElectionDetails;
