import React, { useContext } from 'react'
import Quote from './Components/Quote'
import Button from './Components/Button'
import { AppContext } from './AppContext'
import "./SCSS/app.scss";
export default function App() {
    const { quoteState, rdIndexState, bgState } = useContext(AppContext);
    const [quote, setQuote] = quoteState;
    const [rdIndex, setRdIndex] = rdIndexState;
    const [bgColor, setBgColor] = bgState;

    const cl = ['#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'];

    const generateIndex = async () => {
        await setRdIndex(Math.floor(Math.random() * 200));
        await setBgColor(cl[Math.floor(Math.random() * cl.length)]);
    }

    const tweetQuote = () => {
        let content = encodeURIComponent('"' + quote.text + '"' + quote.athor);
        return "https://www.twitter.com/intent/tweet?" + content;
    }

    return (
        <div className="main-app" style={{ background: bgColor }}>
            <section id="quote-box">
                <Quote />
                <div className="btns">
                    <a href={tweetQuote()} className="btn" style={{ background: bgColor }} id="tweet-quote" target="_blank">Tweet</a>
                    <Button _handleClick={() => generateIndex()} _id="new-quote" _btnValue="New Quote" />
                </div>
            </section>
            <section className="footer" style={{ textAlign: "center", color: "gray-scale(100%)" }}>Coded by Minh Phan</section>
        </div>
    )
}
