import { useRef, useState } from 'react'
import HourInfo from './components/HourInfo/HourInfo.jsx'

const Clock = () => {

    const [format, setFormat] = useState()

    function handleClickAm() {
        setFormat("AM")
    }

    function handleClickTwnFr() {
        setFormat("TwnFr")
    }

    return(
    <>
        <div className="d-flex justify-content-center align-items-center contentContainer">
            <HourInfo firstBox="horas" secondBox="minutos" thirdBox="segundos" format={format}/>
            <div className="position-absolute buttonWrapper d-flex gap-3 w-100 justify-content-center align-items-center">
                <button onClick={() => handleClickAm()} className=" border altButton rounded">AM/PM</button>
                <button onClick={() => handleClickTwnFr()} className=" border altButton rounded">24h</button>
            </div>
        </div>
    </>
    )
}

export default Clock