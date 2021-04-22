import { useState } from "react";

import Hamburger from "./Hamburger";
import Options from "./Options";
import Timer from "./Timer";
import TimerButton from "./TimerButton";

export default function App() {
    const [optionBar, setOptionBar] = useState(false);

    function onHamburgerClick() {
        optionBar ? setOptionBar(false) : setOptionBar(true);
    }

    function renderOptionBar() {
        if (optionBar) {
            return <Options />;
        }
    }

    function onFinish() {
        console.log("done");
    }

    return (
        <>
            <header>
                <h1>Cycle</h1>
                <Hamburger onClick={onHamburgerClick} />
            </header>
            {renderOptionBar()}

            <div className="page-center">
                <div className="timer">
                    <Timer totalTime={5 * 1000} onFinish={onFinish} />
                </div>
                <TimerButton />
            </div>

            <footer>2021</footer>
        </>
    );
}
