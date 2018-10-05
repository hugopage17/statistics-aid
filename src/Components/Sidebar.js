import React, { Component } from 'react';
import Categories from './Categories';

class Sidebar extends Component{
    render(){
        var style = {
            padding: 50,
            paddingBottom: 40
        }


        return(
            <div style={style} id='sidebar'>
                <Categories name='Random Variables' function={this.props.RVfunction}/>
                <Categories name='Normal Distribution' function={this.props.NDfunction}/>
                <Categories name='Binomial Distribution' function={this.props.BDfunction}/>
                <Categories name='Contingency Table' function={this.props.CTfunction}/>
                <Categories name='Confidence Intervals' function={this.props.CIfunction}/>
                <Categories name='Regression' function={this.props.Regfunction}/>
                <Categories name='Help' function={this.props.help}/>
            </div>
        )
    }
}

export default Sidebar
