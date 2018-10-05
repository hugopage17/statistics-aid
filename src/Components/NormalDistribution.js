import React, { Component } from 'react';

class NormalDistribution extends Component{
    constructor(props) {
        super(props);
        this.state = {numList:[]}
        this.addNum = this.addNum.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    addNum(){
        var numList = this.state.numList
        var newNum = this.refs.newNum.value
        if(isNaN(newNum)){
            alert('Please only enter valid numbers')
        }
        else {
          var numDisplay = document.getElementById('display')
          while (numDisplay.firstChild){
            numDisplay.removeChild(numDisplay.firstChild)
          }
          numList.push(newNum)
          this.setState({numList: numList})
        }
        this.refs.newNum.value = ''
        for(var i=0; i<numList.length; i++){
          var showNum = document.createElement('label')
          showNum.innerText = numList[i] + ', '
          document.getElementById('display').appendChild(showNum)
        }
    }

    calculate(){
        var numList = this.state.numList
        var mean = 0
        mean = Number(mean)
        for(var i=0; i<numList.length;i++){
            mean += Number(numList[i])
        }
        mean = (mean/numList.length)
        mean = Math.round(mean * 100)/100

        var variance = 0
        for(var i=0; i<numList.length;i++){
            variance += (Math.pow((numList[i]-mean), 2))
        }
        variance = variance/numList.length
        variance = Math.round(variance * 100)/100

        var sd = Math.sqrt(variance)
        sd = Math.round(sd * 100)/100

        this.refs.mean.innerHTML = 'Mean: ' + mean
        this.refs.variance.innerHTML = 'Variance: ' + variance
        this.refs.sd.innerHTML = 'Standard Deviation: ' + sd
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
                <h1>Normal Distribution</h1>
                <div style={blockStyle}>
                    <input type='text' ref='newNum' size='10'/><button onClick={this.addNum}>Add</button>
                </div>
                <div id='display'></div>
                <div style={blockStyle}>
                    <button onClick={this.calculate}>Calculate</button>
                </div>
                <div>
                    <label ref='mean'></label><br/>
                    <label ref='variance'></label><br/>
                    <label ref='sd'></label>
                </div>
            </div>
        )
    }
}

export default NormalDistribution
