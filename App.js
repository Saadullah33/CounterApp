import React from 'react';
import "./App.css";


class App extends React.Component{

   constructor(props){
     console.log("Constructor is called");
     super(props);
     this.state = {
       count: 0
     };
   }

componentWillMount(){
  this.setState((state) => ({count: state.count + 5}), () => (
console.log(this.state.count)
  ));
}

shouldComponentUpdate(nextProps, nextState){
  if(nextState.count > 25)
  return false;
  return true;
}



incrementCount = () => {
         this.setState((state) => ({
        count: state.count+1
         }));
}

decrementCount = () => {
  this.setState((state) => ({
    count: state.count-1
     }));
}

   render(){
     return(
       <div className="counterWrapper">
       <p className="counter">Counter</p>
       <p className="count">{this.state.count} </p>
         <button onClick={this.incrementCount}>Increment</button>
         <button onClick={this.decrementCount}>Decrement</button>
       </div>
     );
   }

}

export default App;