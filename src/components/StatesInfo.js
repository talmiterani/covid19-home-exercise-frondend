import React, {useEffect,useState}  from 'react'
import axios from 'axios'
import {Spinner} from './Spinner'
import Modal from "react-modal"
Modal.setAppElement('#root')
export default function StatesInfo(props) {
    const [stateDetails, setStatesDetails] = useState(null)
    const [modalBoolean, setModalBoolean] = useState(false)
    const [modalDesc, setModalDesc] = useState('')
   
    useEffect( async()  =>  {
         axios.get("/api/statesDetails").then((response)=>{
            setStatesDetails(response.data.data)
             console.log(response.data.data)
         })
         .catch((err)=>{
             console.log(err)
         })
    },[])
    
    
var DeskRender = (id) =>{
    for(var i of stateDetails){
        if(i.state == id){
            var arr = i.notes.split("\n").map((item)=>{
                
            })
            setModalDesc(i.notes)
        }
    }
}

var RenderMap = () => {
  if  (props.states!==null && stateDetails !== null && stateDetails[0].name!==undefined) {
     let index=-1;
      var el = props.states.map((state)=>{index++
         let infoLink = stateDetails[index].covid19Site;
         let secondaryInfoLink = stateDetails[index].covid19SiteSecondary
                     return( 
                     
                         <div className="row mb-3" key={index}>
                             <div className="col-md-12">
                                 <div className="card h-100 border shadow rounded-2" >
                                 <div className="card-body ">
                                     <h2 className="card-title font-weight-bold">{state.state} - {stateDetails[index].name}&nbsp;&nbsp;
                                         
                                         <i  className="btn fas fa-info-circle" 
                                         onClick={()=>{
                                             setModalBoolean(true);
                                             DeskRender(state.state)
                                             
                                            //  setModalDesc(stateDetails[key].name)
                                         }}></i>
                                        

                                     </h2>

                                     <p>Last update: {state.lastUpdateEt}</p>
                                         <div className="row">
                                             <div className='col-md-3'>
                                                 <h5 className="font-weight-bold"><u>Cases</u></h5>
                                                 <p className="card-text font-weight-bold">Positive cases: <span style={{fontSize:"20px"}}>{state.positive?state.positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">Probable cases: <span style={{fontSize:"15px"}}>{state.probableCases?state.probableCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">Negative cases: <span style={{fontSize:"15px"}}>{state.negative?state.negative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">Pending cases: <span style={{fontSize:"15px"}}>{state.pending?state.pending.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                             </div>
                                             <div className='col-md-3'>
                                                 <h5 className="font-weight-bold"><u>Tests</u></h5>
                                                 <p className="card-text font-weight-bold">Total tests: <span style={{fontSize:"20px"}}>{state.totalTestResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
                                             </div>
                                             <div className='col-md-3'>
                                                 <h5 className="font-weight-bold"><u>Hospitalization</u></h5>
                                                 <p className="card-text font-weight-bold">Cumulative: <span style={{fontSize:"20px"}}>{state.hospitalizedCumulative?state.hospitalizedCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">Currently: <span style={{fontSize:"20px"}}>{state.hospitalizedCurrently?state.hospitalizedCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">In Icu cumulative: <span style={{fontSize:"15px"}}>{state.inIcuCumulative?state.inIcuCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">In Icu currently: <span style={{fontSize:"15px"}}>{state.inIcuCurrently?state.inIcuCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">On ventilator cumulative: <span style={{fontSize:"15px"}}>{state.onVentilatorCumulative?state.onVentilatorCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">On ventilator currently: <span style={{fontSize:"15px"}}>{state.onVentilatorCurrently?state.onVentilatorCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                             </div>
                                             <div className='col-md-3'>
                                                 <h5 className="font-weight-bold"><u>Outcomes</u></h5>
                                                 <p className="card-text font-weight-bold">Recovered: <span style={{fontSize:"20px"}}>{state.recovered?state.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                                 <p className="card-text font-weight-bold">Death: <span style={{fontSize:"20px"}}>{state.death?state.death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                                             </div>
                                         </div>
                                         <div className="row">
                                             <div className='col-md-3'>
                                                     <a href={infoLink} style={{color:"blue"}}>covid19Site</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                                     <a href={secondaryInfoLink} style={{color:"blue"}}>second covid19Site</a>
                                             </div>
                                         </div>
                                     {/* <Link to={`/state/details/${state.state}`}>
                                         <button type="submit" className="btn btn-primary" onClick={()=><StateDetails state={state.state}></StateDetails>}>More information</button>
                                     </Link> */}
                                 </div>
                                 </div>
                             </div>
                             
                         </div>
                        
                      
                     )
                 })
                 return ( 
                     <div>
                        <h1>Data by State</h1>
                        {el}
                     </div>
                 )
  }
        else {
                return <Spinner></Spinner>
        }

}


    return (
        <div className="container text-left">
            
            <Modal isOpen={modalBoolean} onRequestClose={()=>{setModalBoolean(false);setModalDesc('')}}>
                <ul>{modalDesc}</ul>
            </Modal>
            <RenderMap props={props} />
        </div>
    )
}
