import React from 'react'

import Button1 from "./Button1";
import Button2 from "./Button2";

export default function App() {
    return (
        <div>
            App component 1
            <br/>
            <Button1 buttonName={"Click Me"}/>
            <Button2 data={"coming from parent component"}/>
        </div>
    )
}
