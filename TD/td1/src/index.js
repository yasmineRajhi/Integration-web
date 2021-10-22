import ReactDOM from "react-dom";
import React from "react";
import Pictogramme from "./composants/pictogramme";
import Commentaire from "./composants/commentaire";



class App extends React.Component {
    constructor(props){
        super(props);
        this.state={msg:'Bonne découverte des composants React "Components!!!"'};
    }
    like=()=>{
        this.setState({msg:'Welldone'});
    }
    render() {
    return (
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-2">
                <img src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"  className="rounded float-left" className="img-thumbnail" width="80" height="70" />
              </div>
              <div className="col-10 profile-row">
                <div className="row">
                  <a href="#"><h1> Débuter avec React </h1></a>
                </div>
              </div>
            </div>
            <p>{this.state.msg}</p>
        
            <div>
              <Pictogramme like={this.like}/>
            </div>
          </div>
    
          <div className="card-footer text-muted">
           <Commentaire />
          </div>
    
        </div>
      </div>
        )
    }
    }
    export default App;

const app=new App();
ReactDOM.render(<App/>, document.getElementById("root"));
