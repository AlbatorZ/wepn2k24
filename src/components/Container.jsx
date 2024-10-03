import { tabElements } from "../assets/tabElements"
import { useState } from "react"
import './Container.css'

export default function Container () {
    const [selectedButton, setSelectedButton] = useState(0)
    return (<div id = 'tab'>
            <menu>
                {tabElements.map((element,index) => ( <button  key = {index} onClick={() => setSelectedButton(index)} alt = ''> {element.titre} </button>))}
                
                
            </menu>
            <div className="content">
                <p>
                    {tabElements[selectedButton].description}
                    
                </p>
                <img src = {tabElements[selectedButton].image}></img>
            </div>
        </div>)
}