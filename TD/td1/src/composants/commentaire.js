import React from "react";

export default class Commentaire extends React.Component {
    render() {
      return (
        <div>
            <textarea className="form-control" placeholder="Tapez un commentaire..."></textarea>
             <small>120 Restants</small>
        </div>
      )
    }
}
