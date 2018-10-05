import React, { Component } from 'react';

class SubCategories extends Component{
    constructor(props){
        super(props)
        this.state = {textColor: 'white'}
        this.changeColor = this.changeColor.bind(this)
        this.defaultColor = this.defaultColor.bind(this)
    }

    changeColor(){
        this.setState({textColor: '#004e92'})
    }

    defaultColor(){
        this.setState({textColor: 'white'})
    }

    render(){

        var style = {
            color:this.state.textColor,
            borderBottom: 'solid',
            borderWidth:1,
            borderColor: this.state.textColor,
            marginBottom: 50
        }

        return(
            <div style={style} onMouseOver={this.changeColor} onMouseLeave={this.defaultColor} onClick={this.props.function}>
                <label>{this.props.name}</label>
            </div>
        )
    }
}

export default SubCategories
