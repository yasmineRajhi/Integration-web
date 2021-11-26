import './App.css';
import React, { useState } from 'react'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { clicked: true }

    this.list = [
      {
        text: "Pratiquer du sport",
        checked: true,
        id: 1
      },
      {
        text: "Ecouter de la musique",
        checked: false,
        id: 2
      },
      {
        text: "Se balader en plein nature",
        checked: false,
        id: 3
      },
      {
        text: "Lire un roman",
        checked: true,
        id: 4
      }]
  }


  click = (data) => {
    if (data.checked) {
      data.checked = false
    } else {
      data.checked = true
    }

    this.setState({clicked:true})

  }


  render() {
    return (
      <div className="App" >

     

        <div>
          <ul style={{ textDecoration: 'none' }}>

          </ul>

          {this.list.map((data, index) => {
            if (this.state.clicked) {
              return (

                <div key={index}>
                  <input type="checkbox" checked={data.checked ? true : false} onChange={() => { this.click(data) }} id={data.id}></input>
                  <label htmlFor={data.id}>{data.text}</label>

                </div>
              )

            }



          })}
        </div>
      </div>
    )
  }
}

export default App;
