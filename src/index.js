import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Print from './printSteps';
import Steps from "./steps.json";
import reportWebVitals from './reportWebVitals';

//w3schools things start

// class Pirveli extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     stepone: Steps[0].stepnum,
//     steponename: Steps[0].stepname,
//     steponeimg: Steps[0].img
//   }
// }
//   render() {
//     return <div><h1>Step {this.state.stepone}</h1> <h1> {this.state.steponename}</h1><h1><img src={this.state.steponeimg}/></h1> </div>;
//   }
// }

// ReactDOM.render(<Pirveli />, document.getElementById("root"));

//w3schools things end

class MyComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state =
    {
        limit: 50,
        // stepone: Steps[0].stepnum,
        // steponename: Steps[0].stepname,
        // steponeimg: Steps[0].img,
        // id: Steps[0].id,
        counter: 0,
        mtvleli: 1
    }
}

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = () => {
    if (this.state.counter < 7) {
        var el = document.getElementById('para');
        const bottom = el.getBoundingClientRect().bottom < window.innerHeight + 1;

        if (bottom) {
            var count = this.state.counter + 1;
            this.setState(
                {
                    counter: count,
                    // stepone: Steps[count].stepnum,
                    // steponename: Steps[count].stepname,
                    // steponeimg: Steps[count].img
                }
            )
            var mtv = this.state.mtvleli + 1;
            this.setState({ mtvleli: mtv })
            var limit = this.state.limit + 20;
            this.setState(
                {
                    limit: limit
                }
            )
        }
    }
}
  render() {
    return (
        <div id="para">
            <h1>How to make Khinkali? Instructions below</h1>
            {/* Step {this.state.stepone} <br/> */}
            {Steps.map((value, index) => {
                    
                    if (index <= this.state.mtvleli) {

                        return (
                                <Print value={value} key={index}/>

                        );
                    }
                })}
        </div>
    );
}
}
ReactDOM.render(<MyComponent />, document.getElementById("root"));



//w3schools things start

// const myfirstelement = <h1 id="h1">Hello React! {5+5}</h1>
// ReactDOM.render(myfirstelement, document.getElementById("root"));
// ReactDOM.render(<Car />, document.getElementById("root"));
// class Car extends React.Component {
//   constructor() {
//   super();
//   this.state = {model: "escape"};
//   }
//   render() {
//     return <h1>That is a {this.state.model} model</h1>;
//   }
// }

// class Car1 extends React.Component {
//   render() {
//     return <h1>I am a {this.props.color} Car! with {this.props.background} background</h1>
//   }
// }

// ReactDOM.render(<Car1 color="red" background="white"/>, document.getElementById("idi"));

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//     "Before the update, the favorite was " + prevState.favoritecolor;
//   }
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Header />, document.getElementById('root'));

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       age: null,
//     };
//   }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     if (nam === "age") {
//       if (!Number(val)) {
//         alert("Your age must be a number");
//       }
//     }
//     this.setState({[nam]: val});
//   }
//   render() {
//     return (
//       <form>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter your age:</p>
//       <input
//         type='text'
//         name='age'
//         onChange={this.myChangeHandler}
//       />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));

// ReactDOM.render(<Car/>, document.getElementById("idi"));



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//w3schools things end

reportWebVitals();
