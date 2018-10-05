import React, { Component } from 'react';

class CIProDiff extends Component{
    constructor(props){
        super(props)
        this.calculate = this.calculate.bind(this)
    }

    calculate(){
        var t1 = this.refs.t1.value
        var t2 = this.refs.t2.value
        var n1 = this.refs.n1.value
        var n2 = this.refs.n2.value

        if(isNaN(t1)||isNaN(t2)||isNaN(n1)||isNaN(n2)){
            alert('Please only enter valid numbers')
        } else if(this.refs.z1.checked != true && this.refs.z2.checked != true){
            alert('Plese select a Z value')
        } else {
            t1 = Number(t1)
            t2 = Number(t2)

            n1 = Number(n1)
            n2 = Number(n2)

            var zscore = 0
            if (this.refs.z1.checked == true) {
                zscore = 1.96
            } else if (this.refs.z2.checked == true) {
                zscore = 2.58
            }

            var p1 = t1 / n1
            var p2 = t2 / n2
            var total_p = (p1 - p2)

            var se = Math.sqrt(((p1 * (1 - p1)) / n1) + ((p2 * (1 - p2)) / n2))
            var firstEq = total_p - (zscore * se)
            var secondEq = total_p + (zscore * se)
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
                <h1>Difference Between Proportions</h1>
                <div style={blockStyle}>
                    <div>
                        <label>Treatment 1</label>
                        <input type='text' ref='t1' size={10}/>
                    </div>
                    <div>
                        <label>Population 1</label>
                        <input type='text' ref='n1' size={10}/>
                    </div>
                </div>
                <div style={blockStyle}>
                    <div>
                        <label>Treatment 2</label>
                        <input type='text' ref='t2' size={10}/>
                    </div>
                    <div>
                        <label>Population 2</label>
                        <input type='text' ref='n2' size={10}/>
                    </div>
                </div>
                <div style={blockStyle}>
                    <label>Z Score:
                        1.96% <input type='radio' ref='z1' name='zval' style={{marginRight: 20}}/>
                        2.58% <input type='radio' ref='z2' name='zval'/></label>
                </div>
                <div>
                    <button onClick={this.calculate} style={{marginBottom: 20}}>Calculate</button><br/>
                    <label ref='finalVal' style={{fontSize: 26}}></label>
                </div>
            </div>
        )
    }
}

export default CIProDiff
