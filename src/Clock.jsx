import HourInfo from './components/HourInfo/HourInfo.jsx'

const Clock = () => {
    return(
        <>
            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center align-items-center contentContainer p-sm-5">
                <HourInfo info="horas"/>
                <span className="display-5">:</span>
                <HourInfo info="minutos"/>
                <span className="display-5">:</span>
                <HourInfo info="segundos"/>
            </div>
        </>
    )
}

export default Clock