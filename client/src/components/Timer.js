import { useState, useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import TimerButton from "./TimerButton";

export default function Timer({ totalTime, onFinish }) {
    const [timeLeft, actions] = useCountDown(totalTime, 1000);

    const [started, setStarted] = useState(false);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        console.log(timeLeft);
        if (timeLeft <= 0 && started) {
            setRunning(false);
            onFinish();
        }
    }, [timeLeft]);

    function onClick() {
        if (running) {
            actions.pause();
            setRunning(false);
            return;
        }
        if (!started) {
            setStarted(true);
            setRunning(true);
            actions.start();
            return;
        }
        if (timeLeft > 0) {
            setRunning(true);
            actions.resume();
            return;
        }
        console.log("here");
        actions.reset();
        actions.start();
    }

    const percentage = started ? ((totalTime - timeLeft) / totalTime) * 100 : 0;
    return (
        <>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                    path: {
                        stroke: "rgb(0, 0, 0)",
                        strokeWidth: "1",
                    },
                    trail: {
                        stroke: "rgb(255, 255, 255)",
                    },
                    text: {
                        fill: "rgb(0, 0, 0)",
                        fontSize: "7px",
                    },
                }}
            />
            <button onClick={onClick}>Klick</button>
        </>
    );
}
