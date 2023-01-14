// import React from 'react'
import  React,{Component } from 'react'
// import Rendor from 'react'

class Classbox extends Component{
    render(){
        return (
            <div id='box-no-2'>
                <h2>This is created using class component</h2>
                <p className="ext">This is external styling</p>
                <p style={{color:"blue"}}>This is using inline styling</p>
            </div>
          )
    }
  
}

export default Classbox