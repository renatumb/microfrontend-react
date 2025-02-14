import React from 'react'
const ButtonOne = React.lazy(() => import('MicroFrontend/ButtonOne'))
const ButtonXX = React.lazy(() => import('MicroFrontend/ButtonZZ'))

const NameZZ = React.lazy(() => import('OtherName/Comp001'))
const NameYY = React.lazy(() => import('OtherName/CompZZZ'))

export default function App() {
    
    
    
    //<NameZZ />
    
  return (
    <div style={{ border: '2px solid green'}}>
        <h1>SHELL APP </h1> 
        <br/>
        {new Date().toTimeString()} {Date.now()}

        <hr/>
        <h1>Components from App1</h1>
        NO index.html NOR html plugin configured therefore they are NOT accessible thru:<br/>
        <a href="http://localhost:4001">http://localhost:4001</a> = FAIL
        <br/><br/>
        But the remoteEntry is available to others:<br/><br/>
        <a href="http://localhost:4001/remoteEntry.js">http://localhost:4001/remoteEntry.js</a>
        <br/><br/>
        <ButtonOne buttonName={"From shell app"} />
        <ButtonXX data={"Data from shell app ( shell app )"}/>
        
        <hr/>
        <h1>Components from App2 - </h1>
        There is a index.html + html plugin configured therefore they are accessible thru:<br/> 
        <a href="http://localhost:4002">http://localhost:4002</a> = OK
        <br/><br/>
        remoteEntry is available to others:<br/><br/>
        <a href="http://localhost:4002/remoteEntry.js">http://localhost:4002/remoteEntry.js</a>
        <NameZZ />
        <NameYY />
    </div>
  )
}
