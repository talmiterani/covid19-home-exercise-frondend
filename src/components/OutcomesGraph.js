import React,{useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {Spinner} from './Spinner'

export default function OutcomesGraph() {
    const [usDaily, setUsDaily] = useState(null)

    //30 days
    const [thirtyDaysUsDailyDeathIncrease, setThirtyDaysUsDailyDeathIncrease] = useState("")
    const [thirtyDaysUsDailyHospitalizedIncrease, setThirtyDaysUsDailyHospitalizedIncrease] = useState("")
    const [thirtyDaysUsDailyNegativeIncrease, setThirtyDaysUsDailyNegativeIncrease] = useState("")
    const [thirtyDaysUsDailyPositiveIncrease, setthirtyDaysUsDailyPositiveIncrease] = useState("")
    const [thirtyDaysUsDailyTotalTestResultsIncrease, setthirtyDaysUsDailyTotalTestResultsIncrease] = useState("")
    const [thirtyDaysUsDailyDates, setThirtyDaysUsDailyDates] = useState("")

    //60 days
    const [sixtyDaysUsDailyDeathIncrease, setsixtyDaysUsDailyDeathIncrease] = useState("")
    const [sixtyDaysUsDailyHospitalizedIncrease, setsixtyDaysUsDailyHospitalizedIncrease] = useState("")
    const [sixtyDaysUsDailyNegativeIncrease, setsixtyDaysUsDailyNegativeIncrease] = useState("")
    const [sixtyDaysUsDailyPositiveIncrease, setsixtyDaysUsDailyPositiveIncrease] = useState("")
    const [sixtyDaysUsDailyTotalTestResultsIncrease, setsixtyDaysUsDailyTotalTestResultsIncrease] = useState("")
    const [sixtyDaysUsDailyDates, setSixtyDaysUsDailyDates] = useState("")
    //all days
    const [allDaysUsDailyDeathIncrease, setallDaysUsDailyDeathIncrease] = useState("")
    const [allDaysUsDailyHospitalizedIncrease, setallDaysUsDailyHospitalizedIncrease] = useState("")
    const [allDaysUsDailyNegativeIncrease, setallDaysUsDailyNegativeIncrease] = useState("")
    const [allDaysUsDailyPositiveIncrease, setallDaysUsDailyPositiveIncrease] = useState("")
    const [allDaysUsDailyTotalTestResultsIncrease, setallDaysUsDailyTotalTestResultsIncrease] = useState("")
    const [allDaysUsDailyDates, setAllDaysUsDailyDates] = useState("")


    useEffect(() => {
        const fetchData = async () => {
          let alldata = await axios.get("/api/usDaily" );
          alldata = alldata.data.data
          setUsDaily(alldata)
          const allDeathIncreaseLocal = []
          const allHospitalizedIncreaseLocal = []
          const allNegativeIncreaseLocal = []
          const allPositiveIncreaseLocal = []
          const allTotalTestResultsIncreaseLocal = []
          const allDateLocal = []
          alldata.forEach(val => {
            allDeathIncreaseLocal.push(val.deathIncrease)
            allHospitalizedIncreaseLocal.push(val.hospitalizedIncrease)
            allNegativeIncreaseLocal.push(val.negativeIncrease)
            allPositiveIncreaseLocal.push(val.positiveIncrease)
            allTotalTestResultsIncreaseLocal.push(val.totalTestResultsIncrease)
            allDateLocal.push(val.date)
            })
            
            //Thirty Days
            let thirtyDaysDeathIncrease =[]
            let thirtyDaysHospitalizedIncrease =[]
            let thirtyDaysNegativeIncrease =[]
            let thirtyDaysPositiveIncrease =[]
            let thirtyDaysOnVentilatorCurrently =[]
            let thirtyDaysDates =[]
            for(let i=0;i<30;i++){
                thirtyDaysDeathIncrease.push(allDeathIncreaseLocal[i])
                thirtyDaysHospitalizedIncrease.push(allHospitalizedIncreaseLocal[i])
                thirtyDaysNegativeIncrease.push(allNegativeIncreaseLocal[i])
                thirtyDaysPositiveIncrease.push(allPositiveIncreaseLocal[i])
                thirtyDaysOnVentilatorCurrently.push(allTotalTestResultsIncreaseLocal[i])
                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                thirtyDaysDates.push(tempDateLocal)
            }
            thirtyDaysDeathIncrease.reverse()
            thirtyDaysHospitalizedIncrease.reverse()
            thirtyDaysNegativeIncrease.reverse()
            thirtyDaysPositiveIncrease.reverse()
            thirtyDaysOnVentilatorCurrently.reverse()
            thirtyDaysDates.reverse()
            setThirtyDaysUsDailyDeathIncrease(thirtyDaysDeathIncrease)
            setThirtyDaysUsDailyHospitalizedIncrease(thirtyDaysHospitalizedIncrease)
            setThirtyDaysUsDailyNegativeIncrease(thirtyDaysNegativeIncrease)
            setthirtyDaysUsDailyPositiveIncrease(thirtyDaysPositiveIncrease)
            setthirtyDaysUsDailyTotalTestResultsIncrease(thirtyDaysOnVentilatorCurrently)
            setThirtyDaysUsDailyDates(thirtyDaysDates)

            //Sixty Days
            let sixtyDaysDeathIncrease =[]
            let sixtyDaysHospitalizedIncrease =[]
            let sixtyDaysNegativeIncrease =[]
            let sixtyDaysPositiveIncrease =[]
            let sixtyDaysTotalTestResultsIncrease =[]
            let sixtyDaysDates =[]
            for(let i=0;i<60;i++){
                sixtyDaysDeathIncrease.push(allDeathIncreaseLocal[i])
                sixtyDaysHospitalizedIncrease.push(allHospitalizedIncreaseLocal[i])
                sixtyDaysNegativeIncrease.push(allNegativeIncreaseLocal[i])
                sixtyDaysPositiveIncrease.push(allPositiveIncreaseLocal[i])
                sixtyDaysTotalTestResultsIncrease.push(allTotalTestResultsIncreaseLocal[i])
                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                sixtyDaysDates.push(tempDateLocal)
            }
            sixtyDaysDeathIncrease.reverse()
            sixtyDaysHospitalizedIncrease.reverse()
            sixtyDaysNegativeIncrease.reverse()
            sixtyDaysPositiveIncrease.reverse()
            sixtyDaysTotalTestResultsIncrease.reverse()
            sixtyDaysDates.reverse()
            setsixtyDaysUsDailyDeathIncrease(sixtyDaysDeathIncrease)
            setsixtyDaysUsDailyHospitalizedIncrease(sixtyDaysHospitalizedIncrease)
            setsixtyDaysUsDailyNegativeIncrease(sixtyDaysNegativeIncrease)
            setsixtyDaysUsDailyPositiveIncrease(sixtyDaysPositiveIncrease)
            setsixtyDaysUsDailyTotalTestResultsIncrease(sixtyDaysTotalTestResultsIncrease)
            setSixtyDaysUsDailyDates(sixtyDaysDates)

            //All Days
            let allDaysDeathIncrease =[]
            let allDaysHospitalizedIncrease =[]
            let allDaysNegativeIncrease =[]
            let allDaysPositiveIncrease =[]
            let allDaysTotalTestResultsIncrease =[]
            let allDaysDates =[]
            for(let i=0;i<allDateLocal.length;i++){
                allDaysDeathIncrease.push(allDeathIncreaseLocal[i])
                allDaysHospitalizedIncrease.push(allHospitalizedIncreaseLocal[i])

                allDaysNegativeIncrease.push(allNegativeIncreaseLocal[i])
                allDaysPositiveIncrease.push(allPositiveIncreaseLocal[i])

                allDaysTotalTestResultsIncrease.push(allTotalTestResultsIncreaseLocal[i])
                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                allDaysDates.push(tempDateLocal)
            }
            allDaysDeathIncrease.reverse()
            allDaysHospitalizedIncrease.reverse()
            allDaysNegativeIncrease.reverse()
            allDaysPositiveIncrease.reverse()
            allDaysTotalTestResultsIncrease.reverse()
            allDaysDates.reverse()
            setallDaysUsDailyDeathIncrease(allDaysDeathIncrease)
            setallDaysUsDailyHospitalizedIncrease(allDaysHospitalizedIncrease)
            setallDaysUsDailyNegativeIncrease(allDaysNegativeIncrease)
            setallDaysUsDailyPositiveIncrease(allDaysPositiveIncrease)
            setallDaysUsDailyTotalTestResultsIncrease(allDaysTotalTestResultsIncrease)
            setAllDaysUsDailyDates(allDaysDates)
           
         
      }
      fetchData()
      },[])

    const rand = () => Math.round(Math.random() * 10 )
    const colors = ["black", "green", 'yellow', "blue", "pink", "purple" , "brown", "Aqua","orange"]
   

    //30 days
    let stateThirtyDays = {
        labels: thirtyDaysUsDailyDates,
        datasets: [
            {
                label: `Death Increase`,
                data: thirtyDaysUsDailyDeathIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {

                label: `Hospitalized Increase`,
                data: thirtyDaysUsDailyHospitalizedIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `Negative Increase`,
                data: thirtyDaysUsDailyNegativeIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `Positive Increase`,
                data: thirtyDaysUsDailyPositiveIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false
            },
            {
                label: `Total Test Results Increase`,
                data: thirtyDaysUsDailyTotalTestResultsIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false
            }
    ]}

    //60 days
    let stateSixtyDays = {
        labels: sixtyDaysUsDailyDates,
        datasets: [
            {
                label: `Death Increase`,
                data: sixtyDaysUsDailyDeathIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `Hospitalized Increase`,
                data: sixtyDaysUsDailyHospitalizedIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `Negative Increase`,
                data: sixtyDaysUsDailyNegativeIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `Positive Increase`,
                data: sixtyDaysUsDailyPositiveIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false
            },
            {
                label: `Total Test Results Increase`,
                data: sixtyDaysUsDailyTotalTestResultsIncrease,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false
            }
    ]}

//all days

let stateAllDays = {
    labels: allDaysUsDailyDates,
    datasets: [
        {
            label: `Death Increase`,
            data: allDaysUsDailyDeathIncrease,
            borderColor: colors[rand()],
            borderWidth: 1,
            fill: false

        },
        {
            label: `Hospitalized Increase`,
            data: allDaysUsDailyHospitalizedIncrease,
            borderColor: colors[rand()],
            borderWidth: 1,
            fill: false

        },
        {
            label: `Negative Increase`,
            data: allDaysUsDailyNegativeIncrease,
            borderColor: colors[rand()],
            borderWidth: 1,
            fill: false

        },
        {
        
            label: `Positive Increase`,
            data: allDaysUsDailyPositiveIncrease,
            borderColor: colors[rand()],
            borderWidth: 1,
            fill: false
        },
        {
            label: `Total Test Results Increase`,
            data: allDaysUsDailyTotalTestResultsIncrease,
            borderColor: colors[rand()],
            borderWidth: 1,
            fill: false
        }
]}
    
    return (
        <div>
        {(usDaily!==null)?
        <div>
            <div className="container">
                <Line width={500} height={500} data={stateThirtyDays} options={{responsive: true},
                    {title: {text:"Last 30 days incomes in US" , display: true}, maintainAspectRatio:false}
                } /> 
            </div>
            <br></br><br></br>
            <div className="container">
                <Line width={500} height={500} data={stateSixtyDays} options={{responsive: true},
                        {title: {text:"Last 60 days incomes in US" , display: true}, maintainAspectRatio:false}
                } /> 
            </div>
            <br></br><br></br>
            <div className="container">
                <Line width={500} height={500} data={stateAllDays} options={{responsive: true},
                    {title: {text:"All days incomes in US" , display: true}, maintainAspectRatio:false}
                } /> 
            </div>
        </div>
        :<div><Spinner></Spinner></div>}
        </div>
    )
}