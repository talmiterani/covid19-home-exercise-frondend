import React,{useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2';
import useAxios from '@use-hooks/axios';
import axios from 'axios';


export default function Graph(props) {
    // const { response, loading, error, reFetch } = useAxios({
    //     url: `/coins/history/${props.match.params.id}`,
    //     method: 'GET',
    //     options: {
    //         interval: "h1",
    //         start: Date.now()- 1000*60*60*24,
    //         end: Date.now()
    //     }
    //   });
    const [price, setPrice] = useState(null)
    const [date, setDate] = useState(null)
    useEffect(() => {
        axios.post(`/coins/history/${props.match.params.id}`, {
            interval: "h1",
            start: Date.now()-1000*60*60*24,
            end: Date.now()
        }).then(data => {
            const priceLocal = []
            const dateLocal = []
            data.data.data.forEach(val => {
                priceLocal.push(Number(val.priceUsd).toFixed(4))
                dateLocal.push(val.date)
            })
            setPrice(priceLocal)
            setDate(dateLocal)
        })
    }, []) 
    let state = {labels: date,
        datasets: [{
            
            label: `${props.match.params.id} price`,
            data: price,
            backgroundColor: [
                
                'rgba(153, 102, 255, 0.2)'
                
            ],
            borderColor: [
                
                'rgba(153, 102, 255, 0.8)'
            ],
            borderWidth: 3
        }]}
        
    return (
        
        <div>
            {price && 
            <Line data={state} options={{title: {text:"Cryptocurrency" , display: true}}} />
             }
                   
        </div>
    )
}
