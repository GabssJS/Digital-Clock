import { useEffect, useState } from 'react'


const HourInfo = (props) => {

    const [date, setDate] = useState(new Date())
    const [dayPeriod, setDayPeriod] = useState("")
    let hourToRender

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    useEffect(() => {
        const timerId = setInterval(function refreshDate() {
            setDate(new Date())

        }, 1000)

        if (hours < 12) {
            setDayPeriod("AM")
        }
        else {
            setDayPeriod("PM")
        }

        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    if (dayPeriod == "AM") {
        if (hours < 10) {
            if (hours == 0) {
                hourToRender = hours + 12
            }
            else {
                hourToRender =  "0" + hours
            }
        }
        else {
            hourToRender = hours
        }
    }
    else {
        if (hours - 12 < 10) {
            hourToRender = "0" + (hours - 12)
        }
        else {
            hourToRender = hours - 12
        }
    }

    

    return (
        <>
        <div className="w-100 d-flex flex-row justify-content-center align-items-center gap-2 gap-sm-4">
            <div className="d-inline-flex flex-column justify-content-center align-items-center border rounded HourContainer">
                <h1 className="display-1 hourNumber">{props.format == "amPm" ? hours - 12  == 0 ? hours : hourToRender : hours < 10 ? "0" + hours : hours}</h1>
                <span className="display-5 HourInfo text-muted">{props.firstBox}</span>
            </div>
            <span className="display-5">:</span>
            <div className="d-inline-flex flex-column justify-content-center align-items-center border rounded HourContainer">
                <h1 className="display-1 hourNumber">{minutes < 10 ? '0' + minutes : minutes}</h1>
                <span className="display-5 HourInfo text-muted">{props.secondBox}</span>
            </div>
            <span className="display-5">:</span>
            <div className="d-inline-flex flex-column justify-content-center align-items-center border rounded HourContainer">
                <h1 className="display-1 hourNumber">{seconds < 10 ? '0' + seconds : seconds}</h1>
                <span className="display-5 HourInfo text-muted">{props.thirdBox}</span>
            </div>
            {props.format == "amPm" && <span className="display-5">{dayPeriod}</span>}
        </div>
        </>
    )
}

export default HourInfo

