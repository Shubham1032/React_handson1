import React from "react";
// import './cssFiles/Functionalbox.css'
function Functionalbox() {
  return (
    <div id="box-no-1">
        <h2>This is created using functional component</h2>
        <p className="ext">This is external styling</p>
        <p style={{color:"blue"}}>This is using inline styling</p>
    </div>
    )
}


export default Functionalbox