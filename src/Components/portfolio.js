import React from "react";
import "../Styles/Portfolio.css"

export function Portfolio(props) {
    return (
        <div className="col-sm-4 mt-2">
            <a href={props.url} className="anchor-portfolio" target="_blank">
                <div className="card card-over-portfolio">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            {props.desc}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export function PortfolioSpecial(props) {
    return (
        <div className="col-sm-4 mt-2">
            <a href={props.url} className="anchor-portfolio" target="_blank">
                <div className="card card-over-portfolio">
                    <div className="card-body">
                        <h5 className="card-title">
                            <strong>
                                {props.title}
                            </strong>
                        </h5>
                        <p className="card-text">
                            <strong>
                                {props.desc}
                            </strong>
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}