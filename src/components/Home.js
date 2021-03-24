import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CombinedGraph from './CombinedGraph'

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
                window.location.reload()
            }
            else {
                setMessage("failed to add")
            }
        })
    }

    const submitUpdate = () => {
        axios.put(`/coins/${idRef.current.value}`).then((response)=>{
            if (!response.data.error){
                window.location.reload()
            }
            else {
                setMessage("failed to update")
            }
        })
    }


    const submitDelete = () => {
        axios.delete(`/coins/${idRef.current.value}`).then((response)=>{
            if (!response.data.error){
                window.location.reload()
            }
            else {
                setMessage("failed to delete")
            }
        })
    }

    let ids = []
    if (list){
        for (let coin of list ){
            ids.push(coin.id)
        }
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
                            return <tr key={coin.id+"row"}>
                                        <td>
                                            <Link to={`/graph/${coin.id}`}>View</Link>
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
                <CombinedGraph coins={ids}/>
            </>
            }
           
        </div>
    )
}
