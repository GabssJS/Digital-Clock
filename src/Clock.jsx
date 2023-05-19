import { useRef, useState } from 'react'
import HourInfo from './components/HourInfo/HourInfo.jsx'
import Dropleft from './components/HourInfo/Dropleft/Dropleft.jsx'

const Clock = () => {

    const [format, setFormat] = useState()
    const [lang, setLang]  = useState("PT-BR")

    function handleClickAmPm() {
        setFormat("amPm")
    }

    function handleClickTwnFr() {
        setFormat("TwnFr")
    }

    function handleChangeLang(Language) {
        setLang(Language)
    }

    return(
    <>
        <div className="d-flex justify-content-center align-items-center contentContainer">
            <HourInfo firstBox={lang == "PT-BR" ? "horas" : "hours"} secondBox={lang == "PT-BR" ? "minutos" : "minutes"} thirdBox={lang == "PT-BR" ? "segundos" : "seconds"} format={format}/>
            <div className="position-absolute buttonWrapper d-flex gap-3 w-100 justify-content-center align-items-center">
                <button onClick={() => handleClickAmPm()} className=" border altButton rounded">AM/PM</button>
                <button onClick={() => handleClickTwnFr()} className=" border altButton rounded">24h</button>
            </div>
            <Dropleft changeLang={(Language) => handleChangeLang(Language)} />
        </div>
    </>
    )
}

export default Clock