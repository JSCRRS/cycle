import { useState, useEffect } from "react";

export default function TimerButton() {
    const [buttonText, setButtonText] = useState("START");

    return <button className="timer-button">{buttonText}</button>;
}
