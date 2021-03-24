import React,{useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios';


export default function Graph(props) {
    let prices = []


    const [price, setPrice] = useState(null)
    const [date, setDate] = useState(null)
    useEffect(() => {

        loadCoins(props.coins)



    }, [])

    const loadCoins = async (coins) =>{
        for (let i = 0 ; i< coins.length ; i++){
            await axios.post(`/coins/history/${props.coins[i]}`, {
                interval: "h1",
                start: Date.now()-1000*60*60*24,
                end: Date.now()
            }).then(data => {
                let dates = []
                const priceLocal = []
                const dateLocal = []
                data.data.data.forEach(val => {
                    priceLocal.push(Number(val.priceUsd).toFixed(4))
                    dateLocal.push(val.date)
                })
                prices.push(priceLocal)

                if (i == 0){
                    setDate(dateLocal)
                }

            })
        }
        await setPrice(prices)
    }
    let datasets = []
    let state=""
    let backgrounds= []
    let borders = []
    const makeBackgrounds = () =>{
        props.coins.forEach((id)=>{
            let color = [randomizeColor(),randomizeColor(),randomizeColor()]
            backgrounds.push(`rgba(${color},0.2)`)
            borders.push(`rgba(${color},0.8)`)
        })
    }

    makeBackgrounds()

    if (price && price.length > 0){
        for (let i = 0 ; i < props.coins.length ; i++){
            let dataset = {
                label: `${props.coins[i]} price`,
                data: price[i],
                backgroundColor: 
                    backgrounds[i]
                ,
                borderColor:
                    borders[i]
                ,
                borderWidth: 3,
                fill:false
            }
            datasets.push(dataset)
        }

        state = {labels: date,
            datasets: datasets}

    }
        
    return (
        
        <div className="container">
            {(price && price.length !== 0) && 
            <>
            <Line width={500} height={500} data={state} options={
                {title: {text:"Cryptocurrency" , display: true}, maintainAspectRatio:false}
            } />
            </>
             }
                   
        </div>
    )

    function randomizeColor() {
        return Math.floor(Math.random() * 255);
    }
}
