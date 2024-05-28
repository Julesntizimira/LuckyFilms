import { useState } from "react";

export default function AccordionContainer() {
    const [ hidden, setHidden ] = useState("hidden");
    const [ rotationStyle, setRotationStyle] = useState("rotate");
    function handleAccordionClick () {
        setHidden(prev => prev ? null : "hidden");
        setRotationStyle(prev => prev ? null : "rotate")
    }
    return (
        <div className="accordion-container">
            <h3 className="question" onClick={handleAccordionClick}>What cameras do you use ? <i className={`fa-solid fa-angle-right ${rotationStyle}`}></i></h3>
            <div className={`answer-container ${hidden}`}>
            <p className="answer para">Red Cameras: You find Red cameras unparalleled in delivering stunning image quality and cinematic depth.</p>
            </div>
        </div>
    )
}