import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import Timer from "./Timer";

export default function App() {
    //Das soll unten bei totalTime={time}
    const defaultTime = 5 * 1000;
    const smallTime = 3 * 1000;
    const [time, setTime] = useState(defaultTime);

    function clickHandler() {
        document.body.classList.toggle("nav-open");
    }

    function onFinish() {
        console.log("done");
    }

    function onTimeSetupSmall() {
        setTime(smallTime);
    }

    console.log("ganz unten ist die Zeit:", time);

    return (
        <>
            <header>
                <h1>Cycle</h1>
                <Hamburger onClick={clickHandler} />
            </header>
            <div className="page-center">
                <nav className="hamburger-options">
                    <div className="cycle-time">
                        <p>How long per Cycle?</p>
                        <div className="duration">
                            <button onClick={onTimeSetupSmall}>3s</button>
                            <button>6s</button>
                            <button>10s</button>
                        </div>
                    </div>
                </nav>
                <div className="timer">
                    {console.log("im jsx:", time)}
                    <Timer totalTime={time} onFinish={onFinish} />
                </div>
            </div>

            <footer>2021</footer>
        </>
    );
}
