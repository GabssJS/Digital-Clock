import { useState } from "react"

const Dropleft = () => {

    const [show, setShow] = useState()
    const [roundedButton, setRoundedButton] = useState("rounded border")

    return (
        <div className="dropleft langToggle d-flex flex-column-reverse flex-sm-row align-items-end align-items-sm-start">
            <div className={"dropdown-menu position-relative langMenu p-0 " + show}>
                <a onCLick={() => props.changeLang(props.lang)} className="dropdown-item dropLink">PT BR</a>
                <a onCLick={() => props.changeLang(props.lang)} className="dropdown-item dropLink">EN US</a>
            </div>
            <button type="button" onClick={() => show && roundedButton == "rounded-right-side" ? [setShow(''), setRoundedButton('border rounded')] : [setShow('show'), setRoundedButton('rounded-right-side')]} className={"langButton p-2 position-relative " + roundedButton} data-toggle="dropleft" aria-haspopup="true" aria-expanded="false">
                Language
            </button>
        </div>
    )
}

export default Dropleft