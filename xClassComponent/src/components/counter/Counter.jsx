import { Component} from "react";

export default class Counter extends Component{
      constructor(props){
          super(props)
          this.state = {count:0};
      }


    handleClick=(event) =>{
      this.setState((preState)=>  ({count: preState.count + Number(event.target.name)})  );
    console.log(event.target.value);
  }

  render(){
    return<>
      <h1>Counter App</h1>
      <h3>Count: {this.state.count}</h3>
      <button onClick={this.handleClick} name ={1}>Increment</button>
      <button onClick={this.handleClick} name ={-1}>Decrement</button>
      </>
      
  }
}