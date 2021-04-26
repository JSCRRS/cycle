import { useState, useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Timer({ totalTime, onFinish }) {
    const [timeLeft, actions] = useCountDown(totalTime, 1000);
    //console.log("[Timer] totalTime:", totalTime);
    console.log("[Timer] timeLeft:", timeLeft);

    const [buttonText, setButtonText] = useState("START");
    const [started, setStarted] = useState(false);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        //console.log("verbleibende Zeit:", timeLeft);
        if (timeLeft <= 0 && started) {
            setRunning(false);
            onFinish();
        }
    }, [timeLeft]);

    useEffect(() => {
        if (!started || !running) {
            setButtonText("START");
            return;
        }
        if (running) {
            setButtonText("PAUSE");
            return;
        }
    }, [started, running]);

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
        setRunning(true);
        actions.start(totalTime);
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
            <button className="timer-button" onClick={onClick}>
                {buttonText}
            </button>
        </>
    );
}
