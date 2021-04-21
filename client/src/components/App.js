import { useState } from "react";

import Hamburger from "./Hamburger";
import Options from "./Options";

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

    const testText = "hier steht was";

    return (
        <div>
            <header>
                <h1>Cycle</h1>
                <Hamburger onClick={onHamburgerClick} />
            </header>
            <div>{renderOptionBar()}</div>

            <div>{testText}</div>

            <footer>2021</footer>
        </div>
    );
}
