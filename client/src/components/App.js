import { useState } from "react";

import useCountDown from "react-countdown-hook";

import Hamburger from "./Hamburger";
import Options from "./Options";
import Timer from "./Timer";
import TimerButton from "./TimerButton";

export default function App() {
    const [optionBar, setOptionBar] = useState(false);
    const [actions] = useCountDown();

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
        /*         actions.reset();
         */
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
                    <Timer totalTime={15 * 1000} onFinish={onFinish} />
                </div>
            </div>

            <footer>2021</footer>
        </>
    );
}
