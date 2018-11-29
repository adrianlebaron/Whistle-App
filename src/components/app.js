import React, { Component } from 'react';
import {Button} from './button';
import {Image} from './image'
import Input from './input';
import {Navbar} from './navbar'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: "./home"
    }
  }
  render() {
    return (
      <div>
        <div className='app'>
          <div className='link'>
            <Navbar />
          </div>  
          <div className='image'>
            <Image />
          </div>
          <div className="input">
            {Input("")}
          </div>
          <div className='link'>
            <Navbar />
          </div> 
          <div>
            <Button title="HOME" />          
          </div>
        </div>
      </div>
    );
  }
}
