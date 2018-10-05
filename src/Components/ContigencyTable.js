import React, { Component } from 'react';

class ContigencyTable extends Component{
    constructor(props){
        super(props)
        this.calculate = this.calculate.bind(this)
        this.info = this.info.bind(this)
    }

    calculate(){
        var w = this.refs.w.value
        var x = this.refs.x.value
        var y = this.refs.y.value
        var z = this.refs.z.value
        if(isNaN(w)||isNaN(x)||isNaN(y)||isNaN(z)){
            alert('Please only enter valid numbers')
            if(isNaN(w)){
                this.refs.w.value = ''
            }
            if(isNaN(x)){
                this.refs.x.value = ''
            }
            if(isNaN(y)){
                this.refs.y.value = ''
            }
            if(isNaN(z)){
                this.refs.z.value = ''
            }
        }
        else {
            w = Number(w)
            x = Number(x)
            y = Number(y)
            z = Number(z)

            var c1 = w + y
            var c2 = x + z
            var r1 = w + x
            var r2 = y + z

            var oddsRatio = ((w * z) / (x * y))
            var relativeRisk = ((w / (w + x)) / (y / (y + z)))
            var attributableRisk = ((w / (w + x)) - (y / (y + z)))

            this.refs.or.innerHTML = 'Odds Ratio: ' + Math.round(oddsRatio * 100) / 100
            this.refs.rr.innerHTML = 'Relative Risk: ' + Math.round(relativeRisk * 100) / 100
            this.refs.ar.innerHTML = 'Attributable Risk: ' + Math.round(attributableRisk * 100) / 100
        }
    }

    info(){
        alert('The top left input represents how many people in treatment 1 were affected by outcome 1. The bottom left input represents how many people in treatment 2 were affected by outcome 1. The top right input represents how many people in treatment 1 were affected by outcome 2. The top right input represents how many people in treatment 2 were affected by outcome 2.')
    }

    render(){

        var style = {
            padding: 20,
            color:'white',
            paddingBottom: 100,
            fontSize: 24
        }

        return(
            <div style={style} id='component'>
            <h1>Contigency Table</h1>
            <div>
                <input type='text' ref='w' size={10}/>
                <input type='text' ref='x' size={10}/><br/>
                <input type='text' ref='y' size={10}/>
                <input type='text' ref='z' size={10}/><br/>
            </div>
                <button onClick={this.calculate}>Calculate</button>
                <button onClick={this.info}>?</button>
                <div style={{marginTop: 20}}>
                    <label ref='or'></label><br/>
                    <label ref='rr'></label><br/>
                    <label ref='ar'></label><br/>
                </div>
            </div>
        )
    }
}

export default ContigencyTable
