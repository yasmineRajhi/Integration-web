import React from "react";
import Star from "./Star";
import "./style.css"





export default class TD2 extends React.Component {
    constructor(props) {
        super(props);

        const stars_count=5;

        this.objects=[];
        this.stars=[];

        for(var a=0;a<stars_count;a++){
            this.objects.push(React.createRef());
            this.stars.push(<Star id={a} key={a} ref={this.objects[a]} clicked={this.clicked}/>);
        }


    }

    clicked = (id) => {
        // reset all
        for(var a=0;a<this.objects.length;a++){
            this.objects[a].current.setState({on:false});
        }

        if(this.last_id===id){
            this.last_id=null;
            return;
        }
        for(a=0;a<=id;a++){
            this.objects[a].current.setState({on:true});
            
        }

        // save last pressed star id
        this.last_id=id;

        // finish
        console.log("Thank you for "+(id+1)+" stars !!");
    }

    render() {
        return (

            <div className="review">
                <h1>Donne ton avis:</h1>
                <div className="stars">
                    {this.stars}
                </div>
            </div>


        )
    }
}