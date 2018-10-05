import React, { Component } from 'react';

class Categories extends Component{
    constructor(props){
        super(props)
        this.state = {bgColor: '#000428', textColor: 'white'}
        this.changeColor = this.changeColor.bind(this)
        this.defaultColor = this.defaultColor.bind(this)
    }

    changeColor(){
        this.setState({bgColor: 'white'})
        this.setState({textColor: '#141E30'})
    }

    defaultColor(){
        this.setState({bgColor: '#000428'})
        this.setState({textColor: 'white'})
    }

    render(){
        var style = {
            color: this.state.textColor,
            marginBottom: 50,
            border: 'solid',
            borderWidth: 1,
            borderColor: this.state.textColor,
            backgroundColor: this.state.bgColor
        }

        return(
            <div style={style} onMouseOver={this.changeColor} onMouseLeave={this.defaultColor} onClick={this.props.function}>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Categories
