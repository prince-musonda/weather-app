import React from "react";
import './app.css'
import RightSide from './RightSide'
import LeftSide from "./LeftSide";


function App(){
    return(
        <>
            <p class='backdrop'></p>
            <main style = {{background: 'url(backgrounds/rainy-day.jpg)'}}>
                <LeftSide/>
                <RightSide/>
            </main>
        </>
    )
}

export default App