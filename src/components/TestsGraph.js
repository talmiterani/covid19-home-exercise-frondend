import React,{useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {Spinner} from './Spinner'


export default function TestsGraph() {
    const [usDaily, setUsDaily] = useState(null)

    const [thirtyDaysUsDailyPositive, setThirtyDaysUsDailyPositive] = useState("")
    const [thirtyDaysUsDailyNegative, setThirtyDaysUsDailyNegative] = useState("")
    const [thirtyDaysUsDailyDates, setThirtyDaysUsDailyDates] = useState("")

    const [sixtyDaysUsDailyPositive, setSixtyDaysUsDailyPositive] = useState("")
    const [sixtyDaysUsDailyNegative, setsixtyDaysUsDailyNegative] = useState("")
    const [sixtyDaysUsDailyDates, setSixtyDaysUsDailyDates] = useState("")

    const [allDaysUsDailyPositive, setAllDaysUsDailyPositive] = useState("")
    const [allDaysUsDailyNegative, setAllDaysUsDailyNegative] = useState("")
    const [allDaysUsDailyDates, setAllDaysUsDailyDates] = useState("")


    useEffect(() => {
        const fetchData = async () => {
          let alldata = await axios.get("/api/usDaily" );
          alldata = alldata.data.data
          setUsDaily(alldata)
          const allPositiveLocal = []
          const allNegativeLocal = []
          const allDateLocal = []
          alldata.forEach(val => {
            allPositiveLocal.push(val.positive)
            allNegativeLocal.push(val.negative)
            allDateLocal.push(val.date)
            })


            //Thirty Days
            let thirtyDaysPositive =[]
            let thirtyDaysNegative =[]
            let thirtyDaysDates =[]
            for(let i=0;i<30;i++){
                thirtyDaysPositive.push(allPositiveLocal[i])
                thirtyDaysNegative.push(allNegativeLocal[i])
                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                thirtyDaysDates.push(tempDateLocal)
            }
            thirtyDaysPositive.reverse()
            thirtyDaysNegative.reverse()
            thirtyDaysDates.reverse()
            setThirtyDaysUsDailyPositive(thirtyDaysPositive)
            setThirtyDaysUsDailyNegative(thirtyDaysNegative)
            setThirtyDaysUsDailyDates(thirtyDaysDates)

            //Sixty Days
            let sixtyDaysPositive =[]
            let sixtyDaysNegative =[]
            let sixtyDaysDates =[]
            for(let i=0;i<60;i++){
                sixtyDaysPositive.push(allPositiveLocal[i])
                sixtyDaysNegative.push(allNegativeLocal[i])
                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                sixtyDaysDates.push(tempDateLocal)
            }
            sixtyDaysPositive.reverse()
            sixtyDaysNegative.reverse()
            sixtyDaysDates.reverse()
            setSixtyDaysUsDailyPositive(sixtyDaysPositive)
            setsixtyDaysUsDailyNegative(sixtyDaysNegative)
            setSixtyDaysUsDailyDates(sixtyDaysDates)

            //All Days
            let allDaysPositive =[]
            let allDaysNegative =[]
            let allDaysDates =[]
            for(let i=0;i<allDateLocal.length;i++){
                allDaysPositive.push(allPositiveLocal[i])
                allDaysNegative.push(allNegativeLocal[i])
                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                allDaysDates.push(tempDateLocal)
            }
            allDaysPositive.reverse()
            allDaysNegative.reverse()
            allDaysDates.reverse()
            setAllDaysUsDailyPositive(allDaysPositive)
            setAllDaysUsDailyNegative(allDaysNegative)
            setAllDaysUsDailyDates(allDaysDates)
         
         
      }
      fetchData()
      },[])

    const rand = () => Math.round(Math.random() * 10)
    const colors = ["black", "green", 'yellow', "blue", "pink", "purple" , "brown", "Aqua","orange"]

    let stateThirtyDays = {
        labels: thirtyDaysUsDailyDates,
        datasets: [
            {
                label: `Positive Tests`,
                data: thirtyDaysUsDailyPositive,
                borderColor: colors[rand()],
                borderWidth: 3,
                fill: false
            },
            {
                label: `Negative Tests`,
                data: thirtyDaysUsDailyNegative,
                borderColor: colors[rand()],
                borderWidth: 3,
                fill: false

            },
    ]}

    let stateSixtyDays = {
        labels: sixtyDaysUsDailyDates,
        datasets: [
            {
                label: `Positive Tests`,
                data: sixtyDaysUsDailyPositive,
                borderColor: colors[rand()],
                borderWidth: 3,
                fill: false

            },
            {
                label: `Negative Tests`,
                data: sixtyDaysUsDailyNegative,
                borderColor: colors[rand()],
                borderWidth: 3,
                fill: false
            },
    ]}

    let stateAllDays = {
        labels: allDaysUsDailyDates,
        datasets: [
            {
                label: `Positive Tests`,
                data: allDaysUsDailyPositive,
                borderColor: colors[rand()],
                borderWidth: 3,
                fill: false

            },
            {
                label: `Negative Tests`,
                data: allDaysUsDailyNegative,
                borderColor: colors[rand()],
                borderWidth: 3,
                fill: false
            },
    ]}
    return (
        <div>
        {(usDaily!==null)?
        <div>
            <div className="container">
                <Line width={500} height={500} data={stateThirtyDays} options={{responsive: true},
                    {title: {text:"Last 30 days tests in US" , display: true}, maintainAspectRatio:false}
                } /> 
            </div>
            <br></br><br></br>
            <div className="container">
                    <Line width={500} height={500} data={stateSixtyDays} options={{responsive: true},
                    {title: {text:"Last 60 days tests in US" , display: true}, maintainAspectRatio:false}
                } />
            </div>
            <br></br><br></br>
            <div className="container">
                    <Line width={500} height={500} data={stateAllDays} options={{responsive: true},
                    {title: {text:"All days tests in US" , display: true}, maintainAspectRatio:false}
                } />
            </div>
        </div>
        :<div><Spinner></Spinner></div>}
        </div>
    )
}
