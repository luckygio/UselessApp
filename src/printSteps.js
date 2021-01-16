import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class Print extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrow: <img style={{width: "50px", marginTop: "150px"}}src ="https://icon-library.com/images/black-down-arrow-icon/black-down-arrow-icon-24.jpg"/>
  };
  }
  // changeimage = () => {
  //   if(this.props.value.stepnum > 7)
  //   this.setState ({arrow: ""})
  //   }
  // changeimage function --> for deletign arrow from last div, it works with onload... why do we need it? why not? xdd
    componentDidMount() {
      if(this.props.value.stepnum > 7)
    this.setState ({arrow: ""})
    }
  
  
  render() {
    return (
                <div className="container"> 
                {/* onLoad={this.changeimage} onload for changeimage func.*/}
                      <h1>Step: {this.props.value.stepnum}
                        <br/>
                       {this.props.value.stepname} </h1>
                       <br/>
                       <img className={'img' + this.props.value.stepnum} src = {this.props.value.img} />
                       <br/>
                       {this.state.arrow}
                   </div>
       
    );
  }
}

export default Print;