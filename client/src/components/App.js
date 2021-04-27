import { useState } from "react";
import useSound from "use-sound";

import Hamburger from "./Hamburger";
import Timer from "./Timer";
import Use from "./Use";

const times = [3, 6, 10];
const defaultTime = 5;

export default function App() {
    const [time, setTime] = useState(defaultTime);
    const [play] = useSound("/bell.mp3", { volume: 0.25 });

    function clickHandler() {
        document.body.classList.toggle("nav-open");
    }

    function onFinish() {
        play();
    }

    return (
        <>
            <header className="header-small">
                <h1>Cycle</h1>
                <Hamburger onClick={clickHandler} />
            </header>
            <div className="page-center">
                <nav className="hamburger-options visible-small">
                    <Use />
                    <div className="cycle-time">
                        <h4>How long per Cycle?</h4>
                        <div className="duration">
                            {times.map((t) => (
                                <button
                                    key={t}
                                    className={time === t ? "active" : null}
                                    onClick={() => setTime(t)}
                                >
                                    {t}s
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
                <div className="timer">
                    <Timer totalTime={time * 1000} onFinish={onFinish} />
                </div>
            </div>

            <footer>2021</footer>
        </>
    );
}
