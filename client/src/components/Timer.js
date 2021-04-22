import { useState, useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Timer({ totalTime, onFinish }) {
    const [timeLeft, actions] = useCountDown(totalTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            onFinish();
        }
    }, [timeLeft]);

    useEffect(() => {
        actions.start();
    }, []);

    const percentage = ((totalTime - timeLeft) / totalTime) * 100;

    return (
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
    );
}
