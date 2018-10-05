import React, { Component } from 'react';

class CIDifMean extends Component{
    constructor(props){
        super(props)
        this.calculate = this.calculate.bind(this)
    }

    calculate(){
        var mean1 = this.refs.mean1.value
        var mean2 = this.refs.mean2.value
        var sd1 = this.refs.sd1.value
        var sd2 = this.refs.sd2.value
        var n1 = this.refs.n1.value
        var n2 = this.refs.n2.value

        if(isNaN(mean1)||isNaN(mean2)||isNaN(sd1)||isNaN(sd2)||isNaN(n1)||isNaN(n2)){
            alert('Please only enter valid numbers')
        } else if(this.refs.z1.checked != true && this.refs.z2.checked != true){
            alert('Plese select a Z value')
        }
        else {
            var zScore = 0;

            mean1 = Number(mean1)
            mean2 = Number(mean2)

            sd1 = Number(sd1)
            sd2 = Number(sd2)

            n1 = Number(n1)
            n2 = Number(n2)

            var totalMean = 0
            totalMean = (mean1 - mean2)

            if (this.refs.z1.checked == true) {
                zScore = 1.96
            } else if (this.refs.z2.checked == true) {
                zScore = 2.58
            }

            sd1 = Math.pow(sd1, 2)
            sd2 = Math.pow(sd2, 2)

            var rightSide = (zScore * (Math.sqrt((sd1 / n1) + (sd2 / n2))))
            var firstEq = totalMean - rightSide
            var secondEq = totalMean + rightSide

            this.refs.finalVal.innerHTML = Math.round(firstEq * 100) / 100 + ' , ' + Math.round(secondEq * 100) / 100
        }
    }

    render(){
        var style = {
            padding: 20,
            color:'white',
            paddingBottom: 100,
            fontSize: 24
        }

        var blockStyle = {
            marginBottom: 20
        }

        return(
            <div style={style} id='component'>
                <h1>Difference Between Means</h1>
                <div style={blockStyle}>
                    <div><label>Mean 1: <input type='text' size={10} ref='mean1'/></label></div>
                    <div><label>Mean 2: <input type='text' size={10} ref='mean2'/></label></div>
                </div>

                <div style={blockStyle}>
                    <div><label>Standard Deviaton 1: <input type='text' size={10} ref='sd1'/></label></div>
                    <div><label>Standard Deviaton 2: <input type='text' size={10} ref='sd2'/></label></div>
                </div>

                <div style={blockStyle}>
                    <div><label>Sample Size 1: <input type='text' size={10} ref='n1'/></label></div>
                    <div><label>Sample Size 2: <input type='text' size={10} ref='n2'/></label></div>
                </div>
                <div style={blockStyle}>
                    1.96%<input type='radio' name='zVal' ref='z1' style={{marginRight: 20}}/>
                    2.58%<input type='radio' name='zVal' ref='z2'/>
                </div>
                <button onClick={this.calculate} style={{marginBottom: 20}}>Calculate</button><br/>
                <label ref='finalVal' style={{fontSize: 26}}></label>
            </div>
        )
    }
}

export default CIDifMean
