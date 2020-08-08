import React, { Component } from "react";
import "./Home.css";
export class Home extends Component {
 
  constructor(props){
    super(props)
    this.inputRef=React.createRef()
    this.state={
      positive:null,
      negative:null,
      inisolation:null,
      quarantined:null,
      recovered:null,
      deaths:null,
         rdttests:null,
         totaltests:null,
         updatedated:null,



         percentpositivedata:null,
         percentnegativedata:null,
         percentinisolationdata:null,
         percentquarantineddata:null,
         percentrecovereddata:null,
         percentdeathdata:null,
         percentrdtdata:null


         
        }
}
componentDidMount(){
    var A='https://nepalcorona.info/api/v1/data/nepal'

    fetch(A).then((resp)=> {
        resp.json().then((result) => {
            // console.warn(result)
        

            // this.setState({testvalue:result.base})
            
            this.setState({positive:result.tested_positive})
            this.setState({negative:result.tested_negative})
            this.setState({inisolation:result.in_isolation})
            this.setState({quarantined:result.quarantined})
            this.setState({recovered:result.recovered})
            this.setState({deaths:result.deaths})
            this.setState({rdttests:result.tested_rdt})
            this.setState({totaltests:result.tested_total})
            var a = result.updated_at.slice(0,10)+" Time: "+result.updated_at.slice(11,19)
            this.setState({updatedated:a})


            
            

// calculation for percentage
var total = 
result.tested_positive+
result.tested_negative+
result.in_isolation+
result.quarantined+
result.recovered+
result.deaths+
result.tested_rdt

var percentnegative=(result.tested_negative/total)*100
var percentrdt=(result.tested_rdt/total)*100
var percentpositive=(result.tested_positive/total)*100
var percentrecovered=(result.recovered/total)*100
var percentquarantined=(result.quarantined/total)*100
var percentinisolation=(result.in_isolation/total)*100
var percentdeath=(result.deaths/total)*100

// console.log('percentpositive')
// console.log(percentpositive)
// console.log('percentnegative')
// console.log(percentnegative)
// console.log('percentinisolation')
// console.log(percentinisolation)
// console.log('percentquarantined')
// console.log(percentquarantined)
// console.log('percentrecovered')
// console.log(percentrecovered)
// console.log('percentdeath')
// console.log(percentdeath)
// console.log('percentrdt')
// console.log(percentrdt)


            // assigning the percentage data calculated by js into state
            this.setState({percentpositivedata:percentpositive})
            this.setState({percentnegativedata:percentnegative})
            this.setState({percentinisolationdata:percentinisolation})
            this.setState({percentquarantineddata:percentquarantined})
            this.setState({percentrecovereddata:percentrecovered})
            this.setState({percentdeathdata:percentdeath})
            this.setState({percentrdtdata:percentrdt})


            var chartsection = document.getElementsByClassName('chart')
              chartsection[0].style.background=`radial-gradient(circle closest-side, transparent 100%, #fff 0),
              conic-gradient(
                from 180deg,
                red 0,
                red ${percentdeath}%,
                rgb(204,204,204) 0,
                rgb(204,204,204) ${percentinisolation}%,
                rgb(255,115,0) 0,
                rgb(255,115,0) ${percentquarantined}%,
                rgb(45,203,117) 0,
                rgb(45,203,117) ${percentrecovered}%,
                rgb(224,30,132) 0,
                rgb(224,30,132) ${percentpositive}%,
                rgb(151,217,255) 0,
                rgb(151,217,255) ${percentrdt}%,
               
                rgb(156,70,208) 0,
                rgb(156,70,208) ${percentnegative}%
              )`

    })
    })
  }









  render() {
    return (
      <div>
        <div className="grid-container">
          <main className="main">
          <div className='center-div'> 
          <div className="chart"><div className='txtbykshitiz'>CORONA PIE CHART</div><br/><span className='ofnepalcls'>Of Nepal</span></div>
            <ul className='index'>
              <div className='indextxtcls'>INDEX</div>
            
              <li> <span className='positive'>&#9632;</span>Positive:{this.state.positive}  people</li>
              <li> <span className='negative'>&#9632;</span>Negative:{this.state.negative}  people</li>
              <li> <span className='isolation'>&#9632;</span>In isolation:{this.state.inisolation}  people</li>
              <li><span className='quarantine'>&#9632;</span>Quarantined:{this.state.quarantined}  people</li>
              <li><span className='recovered'>&#9632;</span>Recovered:{this.state.recovered}  people</li>
              <li> <span className='deaths'>&#9632;</span>Deaths:{this.state.deaths}   people</li>
              <li> <span className='rdt'>&#9632;</span>RDT Tested:{this.state.rdttests}  people</li>
              <li>Total Tested:{this.state.totaltests}   people</li>
              <br/>
              <li>Last Updated:{this.state.updatedated}</li>
            </ul>
            
            </div>
          </main>
          <footer className="footer">All right reserved</footer>
        </div>
      </div>
    );
  }
}

export default Home;
