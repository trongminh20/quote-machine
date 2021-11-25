import React, { useContext } from 'react'
import Quote from './Components/Quote'
import Button from './Components/Button'
import { AppContext } from './AppContext'
export default function App() {
    const { quoteState, rdIndexState } = useContext(AppContext);
    const [quote, setQuote] = quoteState;
    const [rdIndex, setRdIndex] = rdIndexState;

    const generateIndex = () => {
        setRdIndex(Math.floor(Math.random() * 200));
    }

    return (
        <section id="quote-box">
            <Quote />
            <div className="btns">
                <Button _handleClick={() => { console.log("tweet") }} _id="tweet-quote" _btnValue="tweet" />
                <Button _handleClick={() => generateIndex()} _id="new-quote" _btnValue="New Quote" />
            </div>
        </section>
    )
}
