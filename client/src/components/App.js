import { useState } from "react";

import useSound from "use-sound";
import bellSfx from "../sounds/bell.mp3";

import Hamburger from "./Hamburger";
import Timer from "./Timer";
import Use from "./Use";

export default function App() {
    const smallTime = 3 * 1000;
    const mediumTime = 6 * 1000;
    const largeTime = 10 * 1000;
    const [time, setTime] = useState(smallTime);

    const [play] = useSound(bellSfx);

    function clickHandler() {
        document.body.classList.toggle("nav-open");
    }

    function onFinish() {
        console.log("done");
        play();
    }

    function onTimeSetupSmall() {
        setTime(smallTime);
    }

    function onTimeSetupMedium() {
        setTime(mediumTime);
    }

    function onTimeSetupLarge() {
        setTime(largeTime);
    }

    return (
        <>
            <header>
                <h1>Cycle</h1>
                <Hamburger onClick={clickHandler} />
            </header>
            <div className="page-center">
                <nav className="hamburger-options visible-small">
                    <Use />
                    <div className="cycle-time">
                        <h4>How long per Cycle?</h4>
                        <div className="duration">
                            <button onClick={onTimeSetupSmall}>3s</button>
                            <button onClick={onTimeSetupMedium}>6s</button>
                            <button onClick={onTimeSetupLarge}>10s</button>
                        </div>
                    </div>
                </nav>
                <div className="timer">
                    <Timer totalTime={time} onFinish={onFinish} />
                </div>
            </div>

            <footer>2021</footer>
        </>
    );
}
