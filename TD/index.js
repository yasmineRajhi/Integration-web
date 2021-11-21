import TD2 from "./TD2";
import ReactDOM from "react-dom";
import React from "react";
import TD3 from "./TD3";

const root = document.getElementById("root");

const header = document.getElementById("header");
const container = document.getElementById("container");


class Header extends React.Component {
    render() {
        return (

            <nav>
                <button onClick={()=>{ReactDOM.render(<TD2/>,container)}}>TD2</button>
                <button onClick={()=>{ReactDOM.render(<TD3/>,container)}}>TD2</button>
            </nav>

        )
    }
}


ReactDOM.render(<Header />, header);

