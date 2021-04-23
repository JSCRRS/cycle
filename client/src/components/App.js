import { useState } from "react";

import Hamburger from "./Hamburger";
import Options from "./Options";
import Timer from "./Timer";

export default function App() {
    /*  const [optionBar, setOptionBar] = useState(false);

    function onHamburgerClick() {
        optionBar ? setOptionBar(false) : setOptionBar(true);
    } */

    /*   function renderNavigation() {
        if (optionBar) {
            return <Options />;
        }
    } */

    function clickHandler() {
        document.body.classList.toggle("nav-open");
    }

    function onFinish() {
        console.log("done");
    }

    return (
        <>
            <header>
                <h1>Cycle</h1>
                <Hamburger onClick={/* onHamburgerClick */ clickHandler} />
            </header>
            {/*             {renderNavigation()}
             */}
            <div className="page-center">
                <nav className="hamburger-options">
                    <div className="cycle-count">
                        <p>How many Cycles?</p>
                    </div>
                    <div className="cycle-time">
                        <p>How long per Cycle?</p>
                    </div>
                    <div className="pause-time">
                        <p>How long per pause?</p>
                    </div>
                </nav>
                <div className="timer">
                    <Timer totalTime={5 * 1000} onFinish={onFinish} />
                </div>
            </div>

            <footer>2021</footer>
        </>
    );
}
