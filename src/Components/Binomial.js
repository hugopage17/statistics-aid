import React, { Component } from 'react';

class Binomial extends Component{
    constructor(props) {
        super(props);
        this.calculate = this.calculate.bind(this)
    }

    calculate(){
        var p = this.refs.p.value
        var n = this.refs.n.value
        if(isNaN(p)||isNaN(n)){
            alert('Please only enter valid numbers')
            this.refs.p.value = ''
            this.refs.n.value = ''
        } else {
            p = Number(p)
            p = p / 100
            n = Number(n)
            var mean = n * p
            var variance = n * (p * (1 - p))

            mean = Math.round(mean * 100) / 100
            variance = Math.round(variance * 100) / 100

            this.refs.mean.innerHTML = 'Mean: ' + mean
            this.refs.variance.innerHTML = 'Variance: ' + variance
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
                <h1>Binomial Distribution</h1>
                <div style={blockStyle}>
                    <label>Successes<input type='text' ref='p' size={10}/></label><br/>
                    <label>Sample size <input type='text' ref='n' size={10}/></label><br/>
                </div>
                <div style={blockStyle}>
                    <button onClick={this.calculate}>Calculate</button>
                </div>
                <div style={blockStyle}>
                    <label ref='mean'></label><br/>
                    <label ref='variance'></label>
                </div>
            </div>
        )
    }
}

export default Binomial
