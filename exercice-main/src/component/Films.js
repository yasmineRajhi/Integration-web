import React, { Component } from 'react'

export default class Films extends Component {
    constructor(props) {
        super(props)
        this.Films = [
            { id: 1, nom: 'Fausse note' },
            { id: 2, nom: 'LEnfant de soleil' },
            { id: 3, nom: 'Dachra' },
            { id: 4, nom: 'Jaida' }]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.Films.map((e) => {
                            return (<li key={e.id}>
                                {e.id + " :"+e.nom}
                            </li>)
                        }
                        )}
                </ul>
            </div>
        )
    }
}
