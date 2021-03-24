import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'



export default function Home() {
    const idRef = useRef(null)
    const [list, setList] = useState(null)
    const [message, setMessage] = useState(null)

    useEffect(() => {
        axios.get("/coins").then((response)=>{
            setList(response.data.data)
        })
    }, [message])

    const submitAdd= () => {
        axios.post(`/coins/${idRef.current.value}`).then((response)=>{
            if (!response.data.error){
                setMessage("successfully added")
            }
            else {
                setMessage("failed to add")
            }
        })
    }

    const submitUpdate = () => {
        axios.put(`/coins/${idRef.current.value}`).then((response)=>{
            if (!response.data.error){
                setMessage("successfully updated")
            }
            else {
                setMessage("failed to update")
            }
        })
    }


    const submitDelete = () => {
        axios.delete(`/coins/${idRef.current.value}`).then((response)=>{
            if (!response.data.error){
                setMessage("successfully deleted")
            }
            else {
                setMessage("failed to delete")
            }
        })
    }
    return (
        <div className="container">
            <div className={`${message? "": "d-none"} alert alert-success`}>{message}</div>
            <div>
                <input ref={idRef} type="text"/><br/>
                <button onClick={()=>(submitAdd())} className="btn btn-success">Add</button>
                <button onClick={()=>(submitUpdate())} className="btn btn-warning">update</button>
                <button onClick={()=>(submitDelete())}  className="btn btn-danger">Delete</button>   
            </div>
            {(list!=null && list.length>0) &&
            <table>
                <thead>
                    <tr>
                    {Object.keys(list[0]).map((key)=>
                        <th>{key}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                    {list.map((coin)=>{
                        return <tr><td><a href="/">View</a></td>
                            {Object.values(coin).map((value)=>
                                <td>{(/^https:/).test(value) ?
                                    <a href={value}>{value}</a>
                                    : value
                                }</td>
                            )}
                        </tr>
                       
                    })}
                </tbody>
            </table>
            }
           
        </div>
    )
}
