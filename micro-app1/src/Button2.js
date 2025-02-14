import React from 'react';

export default function Button2({data}) {
    console.log("component 22")
    return (
        <div  style={{backgroundColor: "lightblue"}}>
            <h1>
            INSIDE COMPONENT 2 --  {data}
            </h1>
        </div>
    )
}
