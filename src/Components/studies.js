import React from "react";


export function Studies(props)
{
    return(
        
            <div className="card card-over">
                <img  
                    className="card-img-top"
                    src={require('../Images/uag-logo.png')}
                    alt = "School Logo"
                />
                <div className="card-body">
                    <h4>{props.career}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{props.degree}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{props.school}</h6>
                </div>
            </div>
        
    )
}
