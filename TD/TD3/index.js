import React from "react";

export default class TD3 extends React.Component {
    constructor(props) {
        super(props);


        this.state = { clicks: 0, data_updated: true }

        this.style = { textAlign: "center" }

        this.data = [
            {
                id: 1,
                text: "sport",
                completed: true
            },
            {
                id: 2,
                text: "musique",
                completed: false
            },
            {
                id: 3,
                text: "plein nature",
                completed: false
            },
            {
                id: 4,
                text: "roman",
                completed: true
            }
        ]
    }


    click = (data) => {
        if (data.completed) {
            data.completed = false
        } else {
            data.completed = true
        }

        this.setState({ data_updated: true });
    }
    render() {
        return (
            <>
                <div style={this.style}>
                    <h1>ex1:</h1>
                    <div>
                        <h2>{this.state.clicks}</h2>
                        <button onClick={() => { this.setState({ clicks: this.state.clicks + 1 }) }}>Click here</button>
                    </div>
                </div>

                <hr></hr>


                <div style={this.style}>
                    <h1>challenge:</h1>
                    <div>
                        {this.data.map((data, index) => {
                            if (this.state.data_updated) {
                                return (
                                    <div key={index}>
                                        <input type="checkbox" onChange={() => { this.click(data) }} checked={data.completed ? true : false} id={data.id}></input>
                                        <label htmlFor={data.id}>{data.text}</label>
                                        <hr></hr>
                                    </div>
                                )
                            } else {
                                return (
                                    <>
                                    </>
                                )
                            }

                        })}
                    </div>
                </div>

            </>
        )
    }
}