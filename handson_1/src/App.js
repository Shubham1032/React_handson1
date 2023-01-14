import React from "react"
import './App.css'
import Functionalbox from "./Component/Functionalbox"
import Classbox from "./Component/Classbox"
import { useState } from "react"

function App(){
  const [show,setshow]=useState(false);
  const [shubham,shubhFun]=useState(false);

//  let show1=false;
function ButnFirst(){
// show ? setshow(false) : setshow(true)
setshow(!show)
}

const ButnSecond=()=>{
  // show1 ? setshow1(false) : setshow1(true)
shubhFun(!shubham)

}

  return (
    <div id="Maincontainer">
      {/* <Classbox/> */}
      <h1 className="MainHeading">Styling using functional and class component</h1>
      <button onClick={ButnFirst}>To see styling in functional component</button>
      <button onClick={ButnSecond}>To see styling in class component</button>
      <div >
      {show && <Functionalbox/>}
     {shubham && <Classbox/>}
     </div>
    </div>
  )

}

export default App