import { useEffect, useState } from 'react'


const HourInfo = (props) => {

    const [date, setDate] = useState(new Date())
    var timeInfo = 0

    useEffect(() => {
        const timerId = setInterval(function refreshDate() {
            setDate(new Date())

        }, 1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    if (props.info === 'horas') {
        timeInfo = date.getHours()
    }
    else if (props.info === 'minutos') {
        timeInfo = date.getMinutes()
    }
    else {
        timeInfo = date.getSeconds()
    }

    return (
        <div className="d-inline-flex flex-column justify-content-center align-items-center border rounded smHourContainer HourContainer">
            <h1 className="display-1 hourNumber">{timeInfo/ 10 >= 1 ? timeInfo : '0' + timeInfo}</h1>
        </div>
    )
}

export default HourInfo