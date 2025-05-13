import { useState,  Component } from 'react'
import './App.css'
import Counter from './components/counter/Counter';

export default class App extends Component{
    // constructor(props){
    //  super(props);
    // }

  render(){
     return (<Counter></Counter>);
  }
}
