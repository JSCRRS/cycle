import { useState, useEffect } from "react";
/* import useCountDown from "react-countdown-hook";
 */
export default function TimerButton({ onStart }) {
    const [buttonText, setButtonText] = useState("START");
    /*     const [actions] = useCountDown();
     */
    function startCount() {
        onStart();
    }

    return (
        <button className="timer-button" onClick={startCount()}>
            {buttonText}
        </button>
    );
}
