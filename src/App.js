import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Smallbar from './Components/Smallbar'
import CIMean from './Components/CIMean'
import CIDifMean from './Components/CIDifMean'
import CIPopulation from './Components/CIPopulation'
import CIProDiff from './Components/CIProDiff'
import Binomial from './Components/Binomial'
import RandomVariables from './Components/RandomVariables'
import NormalDistribution from './Components/NormalDistribution'
import ContigencyTable from './Components/ContigencyTable'
import Regression from './Components/Regression'
import Footer from './Components/Footer'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            displayCI:'none',
            displayBD:'none',
            displayRV: 'none',
            displayND: 'none',
            displayCT: 'none',

            CIWindow: 'none',
            CIDiffMean: 'none',
            CIProdiff:'none',
            CITwoPro: 'none',
            AllCI: 'none',

            displayReg: 'none'
        }

        this.OpenCI = this.OpenCI.bind(this)
        this.OpenBD = this.OpenBD.bind(this)
        this.DisplayMeanCI = this.DisplayMeanCI.bind(this)
        this.DisplayMeanDiffci = this.DisplayMeanDiffci.bind(this)
        this.DisplayProCI = this.DisplayProCI.bind(this)
        this.DisplayProCIDiff = this.DisplayProCIDiff.bind(this)
        this.OpenRV = this.OpenRV.bind(this)
        this.OpenND = this.OpenND.bind(this)
        this.OpenCT = this.OpenCT.bind(this)
        this.OpenReg = this.OpenReg.bind(this)
    }

    OpenRV(){
        this.setState({displayRV:'block'})
        this.setState({displayBD:'none'})
        this.setState({displayCI:'none'})
        this.setState({AllCI:'none'})
        this.setState({displayND:'none'})
        this.setState({displayCT:'none'})
        this.setState({displayReg: 'none'})
    }

    OpenND(){
        this.setState({displayND:'block'})
        this.setState({AllCI:'none'})
        this.setState({displayRV:'none'})
        this.setState({displayBD:'none'})
        this.setState({displayCI:'none'})
        this.setState({displayCT:'none'})
        this.setState({displayReg: 'none'})
    }

    OpenCT(){
        this.setState({displayND:'none'})
        this.setState({AllCI:'none'})
        this.setState({displayRV:'none'})
        this.setState({displayBD:'none'})
        this.setState({displayCI:'none'})
        this.setState({displayCT:'block'})
        this.setState({displayReg: 'none'})
    }


    OpenCI(){
        this.setState({displayCI:'block'})
        this.setState({displayBD:'none'})
        this.setState({AllCI:'block'})
        this.setState({displayRV:'none'})
        this.setState({displayND:'none'})
        this.setState({displayCT:'none'})
        this.setState({displayReg: 'none'})
        this.setState({displayReg: 'none'})
    }

    OpenBD(){
        this.setState({displayBD:'block'})
        this.setState({displayCI:'none'})
        this.setState({AllCI:'none'})
        this.setState({displayRV:'none'})
        this.setState({displayND:'none'})
        this.setState({displayCT:'none'})
        this.setState({displayReg: 'none'})

    }

    DisplayMeanCI(){
        this.setState({CIWindow:'block'})
        this.setState({CIDiffMean:'none'})
        this.setState({CIProdiff:'none'})
        this.setState({CITwoPro:'none'})
    }

    DisplayMeanDiffci(){
        this.setState({CIDiffMean:'block'})
        this.setState({CIWindow:'none'})
        this.setState({ CIProdiff:'none'})
        this.setState({CITwoPro:'none'})
    }

    DisplayProCI(){
        this.setState({CIProdiff:'block'})
        this.setState({CIDiffMean:'none'})
        this.setState({CIWindow:'none'})
        this.setState({CITwoPro:'none'})
    }

    DisplayProCIDiff(){
        this.setState({CIProdiff:'none'})
        this.setState({CIDiffMean:'none'})
        this.setState({CIWindow:'none'})
        this.setState({CITwoPro:'block'})
    }

    OpenReg(){
        this.setState({displayBD:'none'})
        this.setState({displayCI:'none'})
        this.setState({AllCI:'none'})
        this.setState({displayRV:'none'})
        this.setState({displayND:'none'})
        this.setState({displayCT:'none'})
        this.setState({displayReg: 'block'})
    }

    help = () => {
      alert('Welcome to the Stats Aid.' + '\n'
      + 'This app aims to assist in calculating various statistical equations.' + '\n'
      + 'Get started by using the sidebar to navigate through the different statistical functions')
    }

    render() {
      var sidebarStyle = {
          width: '30%',
          margin:'auto',
          float:'left'
      }

      var smallSection = {
          width: '25%',
          margin:'auto',
          float:'left',
          display:this.state.AllCI
      }

      var workPanel = {
          width:'45%',
          margin:'auto',
          float:'right'
      }

      var rvStyle = {
          display:this.state.displayRV
      }

      var ndStyle = {
          display: this.state.displayND
      }

      var bdStyle = {
          display:this.state.displayBD
      }

      var ctStyle = {
          display:this.state.displayCT
      }

      var ciStyle = {
          display:this.state.AllCI
      }

      var ciWindow = {
          display:this.state.CIWindow
      }

      var cixdiff = {
          display:this.state.CIDiffMean
      }

      var cipro = {
          display:this.state.CIProdiff
      }

      var ciprodiff = {
            display:this.state.CITwoPro
      }

      var regDisplay = {
          display:this.state.displayReg
      }

    return (
      <div className="App">
          <Header/>
          <div style={sidebarStyle}>
              <Sidebar CIfunction={this.OpenCI} BDfunction={this.OpenBD} RVfunction={this.OpenRV}
                NDfunction={this.OpenND} CTfunction={this.OpenCT} Regfunction={this.OpenReg} help={this.help}/>
          </div>
          <div style={smallSection}>
              <Smallbar confidenceDisplay={this.state.displayCI}
                        cimean={this.DisplayMeanCI} cidiffmean={this.DisplayMeanDiffci} cipro={this.DisplayProCI}
                        ciprodiff={this.DisplayProCIDiff} />
          </div>
          <div style={workPanel}>
              <div style={rvStyle}>
                  <RandomVariables/>
              </div>
              <div style={ndStyle}>
                <NormalDistribution/>
              </div>
              <div style={bdStyle}>
                  <Binomial/>
              </div>
              <div style={ctStyle}>
                    <ContigencyTable/>
              </div>
              <div style={ciStyle}>
                  <div style={ciWindow}>
                      <CIMean/>
                  </div>
                  <div style={cixdiff}>
                      <CIDifMean/>
                  </div>
                  <div style={cipro}>
                      <CIPopulation/>
                  </div>
                  <div style={ciprodiff}>
                      <CIProDiff/>
                  </div>
              </div>
            <div style={regDisplay}>
                <Regression/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
