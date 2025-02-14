import React from 'react';

export default function Comp001() {
    console.warn("inside Comp001")

    return (
        <div style={{border: '5px solid green', margin:'10px', backgroundColor: 'blueviolet', color:'red'}}>
            <h1>
                THIS IS THE FIRST COMPONET FROM APP2<br/>
                {new Date().toTimeString()} {Date.now()}
            </h1>
        </div>)
}
