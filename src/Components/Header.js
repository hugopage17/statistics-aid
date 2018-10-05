import React, { Component } from 'react';
import Categories from './Categories';
import label from '../label.png'

class Header extends Component{
    render(){
        var style = {
            padding: 5,
            borderBottom: 'solid',
            borderWidth: 1,
            borderColor: 'white',
            fontSize: 24
        }
        return(
            <div style={style} id='header'>
                <img src={label} style={{textAlign:'left', color: 'white', marginLeft:50}}/>
            </div>
        )
    }
}

export default Header
