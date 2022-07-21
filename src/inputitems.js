import React from "react";
import "./inputitems.css"



function InputItems({Icon,title,color}){
    return(<div className="inputitem">
         {Icon && <Icon style={{color:color}}/> }
         <h3>{title}</h3>
    </div>

    )
}
export default InputItems