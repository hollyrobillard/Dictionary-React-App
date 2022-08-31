import React from "react";
import logo from "./logo.png";
import "./Logo.css";

export default function Logo() {
    const dictionaryLogos = [];

    for (let i=0; i <15;  i++) {
        dictionaryLogos.push(<img key={i} src={logo} className="logo" alt="logo" />)
    }

    return dictionaryLogos;
}