import React, { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'

export default function Quote() {
    const { quoteState, rdIndexState } = useContext(AppContext);
    const [quote, setQuote] = quoteState;
    const [rdIndex, setRdIndex] = rdIndexState;

    const fetchQuote = async () => {
        const rawData = await fetch("https://type.fit/api/quotes");
        const data = await rawData.json();
        setQuote(data[rdIndex])
    }
    useEffect(() => {
        fetchQuote();
    }, [rdIndex])
    return (
        <>
            <p id="text">{quote.text}</p>
            <p id="author">{quote.author ? quote.author : "Unknow"}</p>
        </>
    )
}
