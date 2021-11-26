import React from 'react'

export default class Lists extends React.Component {
    constructor(props) {
        super(props)
        this.array = [{ id: 1, name: "foulen ben foulen" }, { id: 2, name: "yasmine rajhi" }]
    }
    list = (n) => {
        return (
            <>
                <h1>list{n}</h1>
                {this.array.map((person) => {
                    return (
                        <li key={person.id}>
                            {person.id}
                            <br></br>
                            {person.name}
                            <br></br>
                        </li>
                    )
                })}
            </>
        )
    }



    render(){
        return(
            <>
            {this.list(1)}
            {this.list(2)}
            </>
        )
    }
}
