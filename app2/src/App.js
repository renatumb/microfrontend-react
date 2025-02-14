import React from 'react'
import Comp001 from "./Comp001";

export default function App() {
    return (
        <div>
            App22 - root component {new Date().toTimeString()}
            <br/>
            <Comp001/>
            <Comp001/>
        </div>
    )
}
