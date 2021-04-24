import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import StatesInfo from './StatesInfo'

export default function Home() {
    const [us, setUs] = useState(null)
    const [states, setStates] = useState(null)
    // const [usDaily, setUsDaily] = useState(null)
    

    useEffect(()  =>  {
        axios.get("/api").then((response)=>{
            setUs(response.data.data[0])
            
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get("/api/states").then((response)=>{
            setStates(response.data.data)
         })
         .catch((err)=>{
             console.log(err)
         })
         
    },[])

    
    return (
       
        <div className="container">
             <h3 className="font-weight-bold text-left">Data for March 7, 2021</h3>
            {(us!==null)?
            <>
            <div className="row text-left">
                <div className="col-md-6">
                    <div className="card h-100 border shadow rounded-2 "style={{background:"#F7F7F7"}}>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold"><u>Cases</u></h5>
                            <p className="card-text font-weight-bold">Total cases: <span style={{fontSize:"20px"}}>{us.negative && us.positive?(us.negative+us.positive).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text font-weight-bold">Total positive cases: <span style={{fontSize:"20px"}}>{us.positive?us.positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text font-weight-bold">Total negative cases: <span style={{fontSize:"20px"}}>{us.negative?us.negative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 border shadow rounded-2"style={{background:"#F7F7F7"}}>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold"><u>Tests</u></h5>
                            <p className="card-text font-weight-bold">Total tests: <span style={{fontSize:"20px"}}>{us.totalTestResults?us.totalTestResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">Total tests today: <span style={{fontSize:"15px"}}>{us.totalTestResultsIncrease?us.totalTestResultsIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">Positive tests today: <span style={{fontSize:"15px"}}>{us.positiveIncrease?us.positiveIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text">Negative tests today: <span style={{fontSize:"15px"}}>{us.negativeIncrease?us.negativeIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text">Pending: <span style={{fontSize:"15px"}}>{us.pending?us.pending.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <a href="/graph/tests" className="btn btn-primary">Show graphs</a>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-3">
                    <div className="card h-100 border-primary">
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold"><u>Hospitalization</u></h5>
                        <p className="card-text font-weight-bold">Cumulative: <span style={{fontSize:"20px"}}>{us.hospitalizedCumulative?us.hospitalizedCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text font-weight-bold">Currently: <span style={{fontSize:"20px"}}>{us.hospitalizedCurrently?us.hospitalizedCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text ">In Icu cumulative: <span style={{fontSize:"15px"}}>{us.inIcuCumulative?us.inIcuCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text ">In Icu currently: <span style={{fontSize:"15px"}}>{us.inIcuCurrently?us.inIcuCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text ">Cumulative on ventilator: <span style={{fontSize:"15px"}}>{us.onVentilatorCumulative?us.onVentilatorCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text">Currently on ventilator: <span style={{fontSize:"15px"}}>{us.onVentilatorCurrently?us.onVentilatorCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text">Pending: <span style={{fontSize:"15px"}}>{us.pending?us.pending.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100 border-primary">
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold"><u>Outcomes</u></h5>
                        <p className="card-text font-weight-bold">Recovered: <span style={{fontSize:"20px"}}>{us.recovered?us.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text font-weight-bold">Death: <span style={{fontSize:"20px"}}>{us.death?us.death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text ">Death increase: <span style={{fontSize:"15px"}}>{us.deathIncrease?us.deathIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text ">Hospitalized increase: <span style={{fontSize:"15px"}}>{us.hospitalizedIncrease?us.hospitalizedIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text ">Negative increase: <span style={{fontSize:"15px"}}>{us.negativeIncrease?us.negativeIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text ">Positive increase: <span style={{fontSize:"15px"}}>{us.positiveIncrease?us.positiveIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <p className="card-text ">Total test results increase: <span style={{fontSize:"15px"}}>{us.totalTestResultsIncrease?us.totalTestResultsIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div> */}
              
            </div>
            <br></br>
            <div className="row text-left">
            <div className="col-md-6">
                    <div className="card h-100 border shadow rounded-2" style={{background:"#F7F7F7"}}>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold"><u>Hospitalization</u></h5>
                            <p className="card-text font-weight-bold">Cumulative: <span style={{fontSize:"20px"}}>{us.hospitalizedCumulative?us.hospitalizedCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text font-weight-bold">Currently: <span style={{fontSize:"20px"}}>{us.hospitalizedCurrently?us.hospitalizedCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">In Icu cumulative: <span style={{fontSize:"15px"}}>{us.inIcuCumulative?us.inIcuCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">In Icu currently: <span style={{fontSize:"15px"}}>{us.inIcuCurrently?us.inIcuCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">Cumulative on ventilator: <span style={{fontSize:"15px"}}>{us.onVentilatorCumulative?us.onVentilatorCumulative.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text">Currently on ventilator: <span style={{fontSize:"15px"}}>{us.onVentilatorCurrently?us.onVentilatorCurrently.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text">Pending: <span style={{fontSize:"15px"}}>{us.pending?us.pending.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <a href="/graph/hospitalization" className="btn btn-primary">Show graphs</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card h-100 border shadow rounded-2" style={{background:"#F7F7F7"}}>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold"><u>Outcomes</u></h5>
                            <p className="card-text font-weight-bold">Recovered: <span style={{fontSize:"20px"}}>{us.recovered?us.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text font-weight-bold">Total death: <span style={{fontSize:"20px"}}>{us.death?us.death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">Death increase: <span style={{fontSize:"15px"}}>{us.deathIncrease?us.deathIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">Hospitalized increase: <span style={{fontSize:"15px"}}>{us.hospitalizedIncrease?us.hospitalizedIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">Negative increase: <span style={{fontSize:"15px"}}>{us.negativeIncrease?us.negativeIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">Positive increase: <span style={{fontSize:"15px"}}>{us.positiveIncrease?us.positiveIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <p className="card-text ">Total test results increase: <span style={{fontSize:"15px"}}>{us.totalTestResultsIncrease?us.totalTestResultsIncrease.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):0}</span></p>
                            <a href="/graph/outcomes" className="btn btn-primary">Show graphs</a>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/>
            <StatesInfo states={states}></StatesInfo>
            </>:<div>loading</div>
            }



       
            {/* {(list!=null && list.length>0) &&
            <>
                <table>
                    <thead>
                        <tr>
                        <th>View</th>
                        {Object.keys(list[0]).map((key)=>
                            <th key={key}>{key}</th>
                        )}
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((coin)=>{
                            return <tr key={coin.positive+"row"}>
                                        <td>
                                            <Link to={`/graph/${coin.positive}`}>View</Link>
                                        </td>
                                        {Object.values(coin).map((value)=>
                                            <td>{(/^https:/).test(value) ?
                                                <a href={value}>{value}</a>
                                                : value
                                                }
                                            </td>
                                        )}
                                    </tr>
                        })}
                    </tbody>
                </table> 
                <CombinedGraph coins={positives}/>
             </>
            }  */}
            
           
        </div>
    )
}
