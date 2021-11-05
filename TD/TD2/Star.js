import React from "react";

export default class Star extends React.Component {
    constructor(props) {
        super(props);
        this.state = { on: false };
        this.id=this.props.id;

    }



    handleClick = () => {
        this.props.clicked(this.id);

    }




    render() {
        return (
            <img onClick={this.handleClick} alt={"Star "+(this.id+1)} src={this.state.on ?  require("./star_on.png").default: require("./star_off.png").default}></img>
        )
    }
}