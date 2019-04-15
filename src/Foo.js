import React, {Component} from 'react'

export default class Foo extends React.Component {


    componentDidMount() {
       
    }

   render () {
    return (
        <div>
            <div>Foo</div>

            {/* https://reactjs.org/docs/handling-events.html */}
            <button onClick={this.props.onButtonClick}>Button</button>

            <div>{this.props.bar}</div>
        </div>

    )
   }
    
}
