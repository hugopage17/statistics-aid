import React, { Component } from 'react';

class CIPopulation extends Component{
    constructor(props){
        super(props)
        this.calculate = this.calculate.bind(this)
    }

    calculate(){
        var t = this.refs.t.value
        var n = this.refs.n.value

        if(isNaN(t)||isNaN(n)){
            alert('Please only enter valid numbers')
        } else if(this.refs.z1.checked != true && this.refs.z2.checked != true){
            alert('Plese select a Z value')
        }
        else {
            t = Number(t)
            n = Number(n)
            var p = t / n
            var se = Math.sqrt((p * (1 - p)) / n)
            var zscore = 0
            if (this.refs.z1.checked == true) {
                zscore = 1.96
            } else if (this.refs.z2.checked == true) {
                zscore = 2.58
            }
            var firstEq = p - (zscore * se)
            var secondEq = p + (zscore * se)
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
                <h1>Confidence Intervals of Proportion</h1>
                <div>
                    <div style={blockStyle}><label>Treatment size <input type='text' ref='t'/></label></div>
                    <div style={blockStyle}><label>Population <input type='text' ref='n'/></label></div>
                    <div style={blockStyle}>
                        <label>Z Score:
                            1.96% <input type='radio' ref='z1' name='zval' style={{marginRight: 20}}/>
                            2.58% <input type='radio' ref='z2' name='zval'/></label>
                    </div>
                    <button onClick={this.calculate} style={{marginBottom: 20}}>Calculate</button><br/>
                    <label ref='finalVal' style={{fontSize: 26}}></label>
                </div>
            </div>
        )
    }
}

export default CIPopulation
