import React from "react";

export function Job(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">{props.position}</h5>
                            <p className="card-text text-muted"><strong>Period:</strong> {props.initMonth} {props.initYear} - {props.FinalDateMessage}</p>
                            <p className="card-text text-muted"><strong>{props.company}</strong></p>
                            <p className="card-text">
                                {props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}