import React,{useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {Spinner} from './Spinner'


export default function HospitalizationGraph() {
    const [usDaily, setUsDaily] = useState(null)

    //30 days
    const [thirtyDaysUsDailyHospitalizedCurrently, setThirtyDaysUsDailyHospitalizedCurrently] = useState("")
    const [thirtyDaysUsDailyHospitalizedCumulative, setThirtyDaysUsDailyHospitalizedCumulative] = useState("")
    const [thirtyDaysUsDailyInIcuCurrently, setThirtyDaysUsDailyInIcuCurrently] = useState("")
    const [thirtyDaysUsDailyIcuCumulative, setThirtyDaysUsDailyIcuCumulative] = useState("")
    const [thirtyDaysUsDailyOnVentilatorCurrently, setThirtyDaysUsDailyOnVentilatorCurrently] = useState("")
    const [thirtyDaysUsDailyOnVentilatorCumulative, setThirtyDaysUsDailyOnVentilatorCumulative] = useState("")
    const [thirtyDaysUsDailyDates, setThirtyDaysUsDailyDates] = useState("")
    //60 days
    const [sixtyDaysUsDailyHospitalizedCurrently, setSixtyDaysUsDailyHospitalizedCurrently] = useState("")
    const [sixtyDaysUsDailyHospitalizedCumulative, setSixtyDaysUsDailyHospitalizedCumulative] = useState("")
    const [sixtyDaysUsDailyInIcuCurrently, setSixtyDaysUsDailyInIcuCurrently] = useState("")
    const [sixtyDaysUsDailyIcuCumulative, setSixtyDaysUsDailyIcuCumulative] = useState("")
    const [sixtyDaysUsDailyOnVentilatorCurrently, setSixtyDaysUsDailyOnVentilatorCurrently] = useState("")
    const [sixtyDaysUsDailyOnVentilatorCumulative, setSixtyDaysUsDailyOnVentilatorCumulative] = useState("")
    const [sixtyDaysUsDailyDates, setSixtyDaysUsDailyDates] = useState("")
    //all days
    const [allDaysUsDailyHospitalizedCurrently, setAllDaysUsDailyHospitalizedCurrently] = useState("")
    const [allDaysUsDailyHospitalizedCumulative, setAllDaysUsDailyHospitalizedCumulative] = useState("")
    const [allDaysUsDailyInIcuCurrently, setAllDaysUsDailyInIcuCurrently] = useState("")
    const [allDaysUsDailyIcuCumulative, setAllDaysUsDailyIcuCumulative] = useState("")
    const [allDaysUsDailyOnVentilatorCurrently, setAllDaysUsDailyOnVentilatorCurrently] = useState("")
    const [allDaysUsDailyOnVentilatorCumulative, setAllDaysUsDailyOnVentilatorCumulative] = useState("")
    const [allDaysUsDailyDates, setAllDaysUsDailyDates] = useState("")


    useEffect(() => {
        const fetchData = async () => {
          let alldata = await axios.get("/api/usDaily" );
          alldata = alldata.data.data
          setUsDaily(alldata)
          const allHospitalizedCurrentlyLocal = []
          const allHospitalizedCumulativeLocal = []
          const allInIcuCurrentlyLocal = []
          const allInIcuCumulativeLocal = []
          const allOnVentilatorCurrentlyLocal = []
          const allOnVentilatorCumulativeLocal = []
          const allDateLocal = []
          alldata.forEach(val => {
            allHospitalizedCurrentlyLocal.push(val.hospitalizedCurrently)
            allHospitalizedCumulativeLocal.push(val.hospitalizedCumulative)
            allInIcuCurrentlyLocal.push(val.inIcuCurrently)
            allInIcuCumulativeLocal.push(val.inIcuCumulative)
            allOnVentilatorCurrentlyLocal.push(val.onVentilatorCurrently)
            allOnVentilatorCumulativeLocal.push(val.onVentilatorCumulative)
            allDateLocal.push(val.date)
            })


            //Thirty Days
            let thirtyDaysHospitalizedCurrently =[]
            let thirtyDaysHospitalizedCumulative =[]
            let thirtyDaysInIcuCurrently =[]
            let thirtyDaysIcuCumulative =[]
            let thirtyDaysOnVentilatorCurrently =[]
            let thirtyDaysOnVentilatorCumulative =[]
            let thirtyDaysDates =[]
            for(let i=0;i<30;i++){
                thirtyDaysHospitalizedCurrently.push(allHospitalizedCurrentlyLocal[i])
                thirtyDaysHospitalizedCumulative.push(allHospitalizedCumulativeLocal[i])

                thirtyDaysInIcuCurrently.push(allInIcuCurrentlyLocal[i])
                thirtyDaysIcuCumulative.push(allInIcuCumulativeLocal[i])

                thirtyDaysOnVentilatorCurrently.push(allOnVentilatorCurrentlyLocal[i])
                thirtyDaysOnVentilatorCumulative.push(allOnVentilatorCumulativeLocal[i])

                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                thirtyDaysDates.push(tempDateLocal)
            }
            thirtyDaysHospitalizedCurrently.reverse()
            thirtyDaysHospitalizedCumulative.reverse()

            thirtyDaysInIcuCurrently.reverse()
            thirtyDaysIcuCumulative.reverse()

            thirtyDaysOnVentilatorCurrently.reverse()
            thirtyDaysOnVentilatorCumulative.reverse()

            thirtyDaysDates.reverse()
            setThirtyDaysUsDailyHospitalizedCurrently(thirtyDaysHospitalizedCurrently)
            setThirtyDaysUsDailyHospitalizedCumulative(thirtyDaysHospitalizedCumulative)

            setThirtyDaysUsDailyInIcuCurrently(thirtyDaysInIcuCurrently)
            setThirtyDaysUsDailyIcuCumulative(thirtyDaysIcuCumulative)

            setThirtyDaysUsDailyOnVentilatorCurrently(thirtyDaysOnVentilatorCurrently)
            setThirtyDaysUsDailyOnVentilatorCumulative(thirtyDaysOnVentilatorCumulative)

            setThirtyDaysUsDailyDates(thirtyDaysDates)



            //Sixty Days
            let sixtyDaysHospitalizedCurrently =[]
            let sixtyDaysHospitalizedCumulative =[]
            let sixtyDaysInIcuCurrently =[]
            let sixtyDaysIcuCumulative =[]
            let sixtyDaysOnVentilatorCurrently =[]
            let sixtyDaysOnVentilatorCumulative =[]
            let sixtyDaysDates =[]
            for(let i=0;i<60;i++){
                sixtyDaysHospitalizedCurrently.push(allHospitalizedCurrentlyLocal[i])
                sixtyDaysHospitalizedCumulative.push(allHospitalizedCumulativeLocal[i])

                sixtyDaysInIcuCurrently.push(allInIcuCurrentlyLocal[i])
                sixtyDaysIcuCumulative.push(allInIcuCumulativeLocal[i])

                sixtyDaysOnVentilatorCurrently.push(allOnVentilatorCurrentlyLocal[i])
                sixtyDaysOnVentilatorCumulative.push(allOnVentilatorCumulativeLocal[i])

                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                sixtyDaysDates.push(tempDateLocal)
            }
            sixtyDaysHospitalizedCurrently.reverse()
            sixtyDaysHospitalizedCumulative.reverse()

            sixtyDaysInIcuCurrently.reverse()
            sixtyDaysIcuCumulative.reverse()

            sixtyDaysOnVentilatorCurrently.reverse()
            sixtyDaysOnVentilatorCumulative.reverse()

            sixtyDaysDates.reverse()
            setSixtyDaysUsDailyHospitalizedCurrently(sixtyDaysHospitalizedCurrently)
            setSixtyDaysUsDailyHospitalizedCumulative(sixtyDaysHospitalizedCumulative)

            setSixtyDaysUsDailyInIcuCurrently(sixtyDaysInIcuCurrently)
            setSixtyDaysUsDailyIcuCumulative(sixtyDaysIcuCumulative)

            setSixtyDaysUsDailyOnVentilatorCurrently(sixtyDaysOnVentilatorCurrently)
            setSixtyDaysUsDailyOnVentilatorCumulative(sixtyDaysOnVentilatorCumulative)

            setSixtyDaysUsDailyDates(sixtyDaysDates)



            //All Days
            let allDaysHospitalizedCurrently =[]
            let allDaysHospitalizedCumulative =[]
            let allDaysInIcuCurrently =[]
            let allDaysIcuCumulative =[]
            let allDaysOnVentilatorCurrently =[]
            let allDaysOnVentilatorCumulative =[]
            let allDaysDates =[]
            for(let i=0;i<allDateLocal.length;i++){
                allDaysHospitalizedCurrently.push(allHospitalizedCurrentlyLocal[i])
                allDaysHospitalizedCumulative.push(allHospitalizedCumulativeLocal[i])

                allDaysInIcuCurrently.push(allInIcuCurrentlyLocal[i])
                allDaysIcuCumulative.push(allInIcuCumulativeLocal[i])

                allDaysOnVentilatorCurrently.push(allOnVentilatorCurrentlyLocal[i])
                allDaysOnVentilatorCumulative.push(allOnVentilatorCumulativeLocal[i])
                let tempDateLocal = allDateLocal[i].toString().split("");
                tempDateLocal.splice(4, 0, '/');
                tempDateLocal.splice(7, 0, '/');
                tempDateLocal = tempDateLocal.join("");                    
                allDaysDates.push(tempDateLocal)
            }
            allDaysHospitalizedCurrently.reverse()
            allDaysHospitalizedCumulative.reverse()

            allDaysInIcuCurrently.reverse()
            allDaysIcuCumulative.reverse()

            allDaysOnVentilatorCurrently.reverse()
            allDaysOnVentilatorCumulative.reverse()
            allDaysDates.reverse()
            setAllDaysUsDailyHospitalizedCurrently(allDaysHospitalizedCurrently)
            setAllDaysUsDailyHospitalizedCumulative(allDaysHospitalizedCumulative)

            setAllDaysUsDailyInIcuCurrently(allDaysInIcuCurrently)
            setAllDaysUsDailyIcuCumulative(allDaysIcuCumulative)

            setAllDaysUsDailyOnVentilatorCurrently(allDaysOnVentilatorCurrently)
            setAllDaysUsDailyOnVentilatorCumulative(allDaysOnVentilatorCumulative)

            setAllDaysUsDailyDates(allDaysDates)
           
         
      }
      fetchData()
      },[])

    const rand = () => Math.round(Math.random() * 10 )
    const colors = ["black", "green", 'yellow', "blue", "pink", "purple" , "brown", "Aqua","orange"]
    
    //30 days
    let stateThirtyDaysCurrently = {
        labels: thirtyDaysUsDailyDates,
        datasets: [
            {
                label: `Hospitalized`,
                data: thirtyDaysUsDailyHospitalizedCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {

                label: `In Icu`,
                data: thirtyDaysUsDailyInIcuCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `On Ventilator`,
                data: thirtyDaysUsDailyOnVentilatorCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            }
    ]}

    let stateThirtyDaysCumulative = {
        labels: thirtyDaysUsDailyDates,
        datasets: [
            {
                label: `Hospitalized`,
                data: thirtyDaysUsDailyHospitalizedCumulative,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {

                label: `In Icu`,
                data: thirtyDaysUsDailyIcuCumulative,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `On Ventilator`,
                data: thirtyDaysUsDailyOnVentilatorCumulative,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            }
    ]}



    //60 days
    let stateSixtyDaysCurrently = {
        labels: sixtyDaysUsDailyDates,
        datasets: [
            {
                label: `Hospitalized`,
                data: sixtyDaysUsDailyHospitalizedCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {

                label: `In Icu`,
                data: sixtyDaysUsDailyInIcuCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `On Ventilator`,
                data: sixtyDaysUsDailyOnVentilatorCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            }
    ]}

    let stateSixtyDaysCumulative = {
        labels: sixtyDaysUsDailyDates,
        datasets: [
            {
                label: `Hospitalized`,
                data:sixtyDaysUsDailyHospitalizedCumulative,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {

                label: `In Icu`,
                data: sixtyDaysUsDailyIcuCumulative,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `On Ventilator`,
                data: sixtyDaysUsDailyOnVentilatorCumulative,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            }
    ]}


    //all days
    let stateAllDaysCurrently = {
        labels: allDaysUsDailyDates,
        datasets: [
            {
                label: `Hospitalized`,
                data: allDaysUsDailyHospitalizedCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {

                label: `In Icu`,
                data: allDaysUsDailyInIcuCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `On Ventilator`,
                data: allDaysUsDailyOnVentilatorCurrently,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            }
    ]}

    let stateAllDaysCumulative = {
        labels: allDaysUsDailyDates,
        datasets: [
            {
                label: `Hospitalized`,
                data: allDaysUsDailyHospitalizedCumulative,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {

                label: `In Icu`,
                data: allDaysUsDailyIcuCumulative,
                borderColor: colors[rand()],
                borderWidth: 1,
                fill: false

            },
            {
                label: `On Ventilator`,
                data: allDaysUsDailyOnVentilatorCumulative,
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
                <div className="row">
                    <div className="col-md-6">

                        <Line width={500} height={500} data={stateThirtyDaysCurrently} options={{responsive: true},
                            {title: {text:"Last 30 days hospitalization currently in US" , display: true}, maintainAspectRatio:false}
                        } /> 
                    </div>
                    <div className="col-md-6">

                        <Line width={500} height={500} data={stateThirtyDaysCumulative} options={{responsive: true},
                            {title: {text:"Last 30 days hospitalization cumulative in US" , display: true}, maintainAspectRatio:false}
                        } /> 
                    </div>
                </div>
            </div>

            <br></br><br></br>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        <Line width={500} height={500} data={stateSixtyDaysCurrently} options={{responsive: true},
                            {title: {text:"Last 60 days hospitalization currently in US" , display: true}, maintainAspectRatio:false}
                        } /> 
                    </div>
                    <div className="col-md-6">

                        <Line width={500} height={500} data={stateSixtyDaysCumulative} options={{responsive: true},
                            {title: {text:"Last 60 days hospitalization cumulative in US" , display: true}, maintainAspectRatio:false}
                        } /> 
                    </div>
                </div>
            </div>

            <br></br><br></br>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        <Line width={500} height={500} data={stateAllDaysCurrently} options={{responsive: true},
                            {title: {text:"All days hospitalization currently in US" , display: true}, maintainAspectRatio:false}
                        } /> 
                    </div>
                    <div className="col-md-6">

                        <Line width={500} height={500} data={stateAllDaysCumulative} options={{responsive: true},
                            {title: {text:"All days hospitalization cumulative in US" , display: true}, maintainAspectRatio:false}
                        } /> 
                    </div>
                </div>
            </div>


        </div>
        :<div><Spinner></Spinner></div>}
        </div>
    )
}
