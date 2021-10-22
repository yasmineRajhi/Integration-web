import React from "react";
import Icone from "./icon";
import app from "../index"

export default class Pictogramme extends React.Component {
  constructor(props){
    super(props);
    this.like=props.like
  }
  

    render() {
      return (
    <div>
          {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
          <Icone />
          <hr />
        <div>
         <button onClick={this.like} type="button" className="btn no-outline btn-secondary">
          <i className="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
          &nbsp;
          <span className="align-middle">J'aime</span>
        </button>
        </div>
    </div>
        )
    }
  }
  
