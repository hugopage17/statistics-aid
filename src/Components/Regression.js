import React, { Component } from 'react';

class Regression extends Component{
    constructor(props){
        super(props)
        this.state = {
                xVal:[],
                yVal:[],
                mean_x:0,
                mean_y:0,
                slopeSD:0,
                showbut: 'none'
        }

        this.Add_x_Val = this.Add_x_Val.bind(this)
        this.Add_y_Val = this.Add_y_Val.bind(this)
        this.calc = this.calc.bind(this)
        this.moreInfo = this.moreInfo.bind(this)
    }

    Add_x_Val(){
        var newNum = this.refs.xVal.value
        if(isNaN(newNum)){
            alert('Please only enter valid numbers')
        } else {
            newNum = Number(newNum)
            var xList = this.state.xVal
            xList.push(newNum)
            this.setState({xVal: xList})
        }
        this.refs.xVal.value = ''
    }

    Add_y_Val(){
        var newNum = this.refs.yVal.value
        if(isNaN(newNum)){
            alert('Please only enter valid numbers')
        } else {
            newNum = Number(newNum)
            var yList = this.state.yVal
            yList.push(newNum)
            this.setState({yVal: yList})
        }
        this.refs.yVal.value = ''
    }

    calc(){
        var xList = this.state.xVal
        var yList = this.state.yVal

        if(xList.length == yList.length) {
            var mean_x = 0
            for (var i = 0; i < xList.length; i++) {
                mean_x += xList[i]
                console.log(xList[i])
            }
            mean_x = (mean_x / xList.length)
            mean_x = Math.round(mean_x * 100) / 100


            var mean_y = 0
            for (var i = 0; i < yList.length; i++) {
                mean_y += yList[i]
            }
            mean_y = (mean_y / yList.length)
            mean_y = Math.round(mean_y * 100) / 100

            var numerator = 0
            for (var i = 0; i < xList.length; i++) {
                numerator += ((xList[i] - mean_x) * (yList[i] - mean_y))
            }
            numerator = Math.round(numerator * 100) / 100

            var denominator = 0
            for (var i = 0; i < xList.length; i++) {
                denominator += Math.pow(xList[i] - mean_x, 2)
            }
            denominator = Math.round(denominator * 100) / 100

            var slope = numerator / denominator
            slope = Math.round(slope * 100) / 100

            var intercept = mean_y - (slope * mean_x)
            intercept = Math.round(intercept * 100) / 100

            var se = 0
            var y_sum = 0
            for (var i = 0; i < xList.length; i++) {
                y_sum += Math.pow(yList[i] - mean_y, 2)
            }
            se = Math.sqrt(y_sum / (xList.length - 2))

            var slopeSD = 0
            var x_sum = 0
            for (var i = 0; i < xList.length; i++) {
                x_sum += Math.pow(xList[i] - mean_x, 2)
            }
            slopeSD = se / Math.sqrt(x_sum)
            slopeSD = Math.round(slopeSD*100)/100

            this.refs.slope.innerHTML = 'Slope: ' + slope
            this.refs.intercept.innerHTML = 'Intercept: ' + intercept

            this.setState({mean_x: mean_x})
            this.setState({mean_y: mean_y})

            this.setState({slopeSD: slopeSD})

            this.setState({showbut: 'block'})
        } else if(xList.length != yList.length){
            alert('The number of X variables do not match the number of Y variables, please check your data')
        }
    }

    moreInfo(){
        alert('Mean x: ' + this.state.mean_x + '\n'
            + 'Mean y: ' + this.state.mean_y + '\n'
            + 'Standard Error of slope: ' + this.state.slopeSD)
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
                <h1>Regression</h1>
                <div style={blockStyle}>
                    <label>Variable 1</label>
                    <input ref='xVal' size={10}/>
                    <button onClick={this.Add_x_Val}>Add</button>
                </div>
                <div style={blockStyle}>
                    <label>Variable 2</label>
                    <input ref='yVal' size={10}/>
                    <button onClick={this.Add_y_Val}>Add</button>
                </div>
                <button onClick={this.calc}>Calculate</button>
                <div>
                    <h2 ref='slope'></h2>
                </div>
                <div>
                    <h2 ref='intercept'></h2>
                </div>
                <button onClick={this.moreInfo} style={{display:this.state.showbut}}>More Info</button>
            </div>
        )
    }
}

export default Regression
