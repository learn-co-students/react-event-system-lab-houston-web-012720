// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

  logIt = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <div>
        <input onKeyUp = {this.logIt} type="password" />
      </div>
    )
  }
}