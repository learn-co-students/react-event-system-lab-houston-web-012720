// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

    sayGood = () => {
        console.log("Good!")
    }
    
    sayHey = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return(
            <div>
                <button onFocus = {this.sayGood} onBlur = {this.sayHey}></button>
            </div>
        )
    }
}