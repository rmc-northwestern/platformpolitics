import React, { Component } from 'react';

class Loading extends Component {

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <div style={{height:'200px'}}></div>
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
        <div className='contentMainHeader'>loading...</div>
      </div>
    );
  }
}

export default Loading;
