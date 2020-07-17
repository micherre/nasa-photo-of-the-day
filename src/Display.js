import React from "react"

function Display(props){
    const {funName} = props 
    return (
        <div>
            <img src= {funName.url} alt=""/>
        </div>
    )
}

export default Display