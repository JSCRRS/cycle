import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Timer() {
    const DEFAULT_TIME = 1500;
    const percentage = 80;

    return (
        <div className="timer">
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
        </div>
    );
}

/*

KOPIE

export default function Timer() {
    const FULL_DASH_ARRAY = 283;

    const TIME_LIMIT = 5;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;

    startTimer();

    function onTimesUp() {
        clearInterval(timerInterval);
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
                timeLeft
            );
            setCircleDasharray();

            if (timeLeft === 0) {
                onTimesUp();
            }
        }, 1000);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
    }

    return (
        <div className="base-timer">
            <svg
                className="base-timer__svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g className="base-timer__circle">
                    <path
                        id="base-timer-path-remaining"
                        strokeDasharray="283"
                        className="base-timer__path-remaining ${remainingPathColor}"
                        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                    ></path>
                </g>
            </svg>
            <span id="base-timer-label" className="base-timer__label">
                {formatTime(timeLeft)}
            </span>
        </div>
    );
}




*/
