// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component{

  sayGood = () => {
    console.log('Good!')
  }

  eyesOnMe = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return(
      <button onFocus = {this.sayGood}  onBlur = {this.eyesOnMe}></button>
    )
  }
}