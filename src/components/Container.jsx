import { tabElements } from "../assets/tabElements"
import { useState } from "react"
import './Container.css'

export default function Container () {
    const [selectedButton, setSelectedButton] = useState(0)
    return (<div id = 'tab'>
            <menu>
                {tabElements.map((element,index) => ( <button  key = {index} onClick={() => setSelectedButton(index)} className = {selectedButton === index ? 'active' : undefined} > 
                {element.bouton} </button>))}
                
                
            </menu>
            <div className="content">
                <div>
                    <h3>
                        {tabElements[selectedButton].titre}
                    </h3>
                    <p>
                        {tabElements[selectedButton].description}
                    </p>
                </div>
                <img src = {tabElements[selectedButton].image} alt = {''} ></img>
            </div>
        </div>)
}