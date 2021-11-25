import React, { useContext } from 'react'
import { btnMouseCover, btnMouseLeave } from "../Events/ButtonEvents"
import "../SCSS/buttons.scss"
import { AppContext } from '../AppContext'
export default function Button({ _btnValue, _handleClick, _id }) {
    const { bgState } = useContext(AppContext);
    const [bgColor, setBgColor] = bgState;

    return (
        <button onMouseOver={e => btnMouseCover(e, "", "")}
            onMouseLeave={e => btnMouseLeave(e, "", "")}
            onClick={_handleClick}
            className="btn"
            style={{ background: bgColor }}
            id={_id}> {_btnValue}
        </button>
    )
}
