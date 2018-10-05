import React, { Component } from 'react';
import SubCategories from './SubCategories';

class Smallbar extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    render(){
        var style = {
            backgroundColor: 'black',
            padding: 50,
            paddingBottom: 100
        }

        var CICategory = {
            display:this.props.confidenceDisplay
        }
        return(
            <div style={style}>
                <div style={CICategory}>
                    <SubCategories name='Population mean' function={this.props.cimean}/>
                    <SubCategories name='Difference between means' function={this.props.cidiffmean}/>
                    <SubCategories name='Population proportion' function={this.props.cipro}/>
                    <SubCategories name='Difference between proportions' function={this.props.ciprodiff}/>
                </div>
            </div>
        )
    }
}




export default Smallbar