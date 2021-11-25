import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'
import "../SCSS/quote.scss"
export default function Quote() {
    const { bgState, quoteState, rdIndexState } = useContext(AppContext);
    const [quote, setQuote] = quoteState;
    const [rdIndex, setRdIndex] = rdIndexState;
    const [bgColor, setBgColor] = bgState;
    const fetchQuote = async () => {
        const rawData = await fetch("https://type.fit/api/quotes");
        const data = await rawData.json();
        setQuote(data[rdIndex])
    }

    useEffect(() => {
        fetchQuote();
    }, [rdIndex])

    return (
        <div className="quote">
            <p id="text" style={{ color: bgColor }}>{quote.text}</p>
            <p id="author" style={{ color: bgColor }}>{quote.author ? quote.author : "Unknow"}</p>
        </div>
    )
}
