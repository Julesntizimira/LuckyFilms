import AccordionContainer from "./accordionContainer"

export default function Accordion() {


    return (
        <div className="accordion">
            <h2 className="accordion-title">Common Questions</h2>
            <div className="accordion-wrapper">
                <AccordionContainer/>   
                <AccordionContainer/> 
                <AccordionContainer/> 
                <AccordionContainer/>  
            </div>
        
        </div>
    )

}