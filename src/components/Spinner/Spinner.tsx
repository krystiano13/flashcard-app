import React from "react";
import './Spinner.css';

export function Spinner() {
    return (
        <span
            className="loader w-14 h-14 border-white border-solid border-[5px]
            border-b-transparent rounded-[50%] inline-block box-border "
        ></span>
    )
}