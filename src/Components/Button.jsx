import React from 'react'
import { btnMouseCover, btnMouseLeave } from "../Events/ButtonEvents"
export default function Button({ _btnValue, _handleClick, _id }) {

    return (
        <button onMouseOver={e => btnMouseCover(e, "", "")}
            onMouseLeave={e => btnMouseLeave(e, "", "")}
            onClick={_handleClick}
            className="btn"
            id={_id}> {_btnValue}
        </button>
    )
}
