import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./Scrollspy.css"; 

var RenderMap = () => {

    const [states, setStates] = useState(null)

    useEffect(()  =>  {


        axios.get("/api/states").then((response)=>{
            setStates(response.data.data)
         })
         .catch((err)=>{
             console.log(err)
         })
         
    },[])


    if  (states!==null) {
        var el = states.map((state)=>{
            console.log(state)
                       return( 
                       
                        <a style={{color:'black', marginRight:"10px"}} href={'#'+state.state}>{state.state}</a>
                       )
                   })
                   return ( 
                       <div>
                          {el}
                       </div>
                   )
    
            }
            else {
                return <div>loading</div>
        }
  
  }
export default function Scrollspy() {
    return (
        <div className="scrollspy">
            <div className="d-flex flex-row-reverse" >

                <div   className="card border shadow rounded-2 position-fixed" style={{zIndex:"1", background:"#F7F7F7",width:"200px", marginRight:"50px"}}>
                            <div className="card-body" >
                                <h5 className="card-title font-weight-bold"><u>Jump to a state</u></h5>
                                <RenderMap />
                                <br></br><br></br>
                                <a href="#header3" style={{color:"black"}}>back to top</a>
                            </div>
                </div>
             </div>
        </div>
    )
}
