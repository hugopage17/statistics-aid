import React, { Component } from 'react';

class CIMean extends Component{
    constructor(props){
        super(props)
        this.calculate = this.calculate.bind(this)
    }

    calculate(){
        var mean = this.refs.mean.value
        var pop = this.refs.pop.value
        var sd = this.refs.sd.value

        if (isNaN(mean)||isNaN(pop)||isNaN(sd)){
            alert('Please only enter valid numbers')
        } else if(this.refs.z1.checked != true && this.refs.z2.checked != true){
            alert('Plese select a Z value')
        }
        else {
            var ciLevel = ''
            mean = Number(mean)
            pop = Number(pop)
            sd = Number(sd)

            var zScore = 0
            if (this.refs.z1.checked == true) {
                zScore = 1.96
                ciLevel = '95%'
            } else if (this.refs.z2.checked == true) {
                zScore = 2.58
                ciLevel = '99%'
            }
            var rightSide = (zScore * (sd / (Math.sqrt(pop))))
            var firstEq = mean - rightSide
            var secondEq = mean + rightSide
            this.refs.finalValue.innerHTML = 'With a Z score of ' + zScore + ' we are ' + ciLevel + ' confident the true mean is between ' + Math.round(firstEq * 100) / 100 + ' and ' + Math.round(secondEq * 100) / 100
        }
    }

    render(){
        var style = {
            padding: 20,
            color:'white',
            paddingBottom: 100,
            fontSize: 24
        }

        var labelStyle = {
            marginBottom: 20
        }

        return(
            <div style={style} id='component'>
                <h1>Confidence Intervals for Mean</h1>
                <div style={labelStyle}><label>Mean <input type='text' ref='mean'/></label></div>
                <div style={labelStyle}><label>Population <input type='text' ref='pop'/></label></div>
                <div style={labelStyle}><label>Standard Deviation <input type='text' ref='sd'/></label></div>
                <div>
                    <label>Z value: </label>
                    1.96<input type='radio' name='zScore' ref='z1' style={{marginRight:10}}/>
                    2.58<input type='radio' name='zScore' ref='z2' style={{marginRight:10, marginBottom: 10}}/>
                </div>
                <button onClick={this.calculate} style={{marginBottom: 20}}>Calculate</button><br/>
                <label ref='finalValue'></label>
            </div>
        )
    }
}

export default CIMean
