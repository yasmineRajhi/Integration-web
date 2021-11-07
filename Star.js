import React from 'react';

class Star extends React.Component {
    constructor(props){
        super(props);
        this.state = { on: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.state.on){
            this.setState( { on: false });
        }else{
            this.setState( { on: true });
        }
    }

    render(){
        return(

        <img style={{width:20,height:20}} src={this.state.on ? process.env.PUBLIC_URL + '/star_on.png' : process.env.PUBLIC_URL + 'star_off.png'}
        onClick = {this.handleClick}/>
        )
    }
}

export default Star
