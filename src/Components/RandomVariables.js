import React, { Component } from 'react';

class RandomVariables extends Component{
    constructor(props) {
        super(props);
        this.state = {numList:[]}
        this.howTo = this.howTo.bind(this)
        this.addNum = this.addNum.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    howTo(){
        alert('Enter the a probability value that will be added into a list to help determine the mean and variance')
    }

    addNum(){
        var numList = this.state.numList
        var newNum = this.refs.propVal.value
        if(isNaN(newNum)){
            alert('Please only enter valid numbers')
        } else {
            numList.push(newNum)
            this.setState({numList: numList})
        }
        this.refs.propVal.value = ''
    }

    calculate(){
        var numList = this.state.numList
        if(numList.length <= 0){
            alert('Please enter valid data first')
        } else {
            var mean = 0
            for (var i = 0; i < numList.length; i++) {
                mean += (i * numList[i])
            }
            mean = Math.round(mean * 100) / 100

            var variance = 0
            for (var i = 0; i < numList.length; i++) {
                var firstEQ = i - mean
                variance += ((Math.pow(firstEQ, 2)) * numList[i])
            }
            variance = Math.round(variance * 100) / 100

            var sd = Math.sqrt(variance)
            sd = Math.round(sd * 100) / 100

            this.refs.mean.innerHTML = 'Mean: ' + mean
            this.refs.variance.innerHTML = 'Variance: ' + variance
            this.refs.sd.innerHTML = 'Standard Deviation: ' + sd
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
                <h1>Random Variables</h1>
                <div style={blockStyle}>
                    <label>Probability <input type='text' size={10} ref='propVal'/></label>
                    <button onClick={this.addNum} style={{marginLeft:5}}>Enter</button>
                </div>
                <div style={blockStyle}>
                    <button onClick={this.calculate}>Calculate</button>
                    <button onClick={this.howTo}>?</button>
                </div>
                <div style={blockStyle}>
                    <label ref='mean'></label><br/>
                    <label ref='variance'></label><br/>
                    <label ref='sd'></label>
                </div>
            </div>
        )
    }

}

export default RandomVariables
