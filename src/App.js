import React from "react";
import "./Components/Card.css";
import Card from "./Components/Card.js";
import search from "./Components/images/search.png";
import house from "./Components/images/house.png";
import light from "./Components/images/light.png";
import monitor from "./Components/images/monitor.png";

function App(){
    return(
      <div className="page-holder">
        <div className="page-wrapper">
          <div className="page-content">
            <h1 className="head1">Reliable, efficient delivery</h1>
            <h1 className="head2">Powered by Technology</h1>
            <p>Our Artficial Intelligence powered tools use millions of project data<br/>points to ensure that your project is successful</p>
          </div>
          <div className="card-holder">
            <div>
              <Card Header="Supervisor" Text="Monitor activity to identity project roadblocks" Icon={search}/>
            </div>
            <div className="card-holder2">
              <div>
                <Card Header="Team Builder" Text="Scans our talent network to create the optimal team for your project" Icon={house}/>
              </div>
              <div>
                <Card Header="Karma" Text="Regularly evaluates our talent to ensure quality" Icon={light}/>
              </div>
            </div>
            <div>
              <Card Header="Calculator" Text="Users data from past projects to provide better delivery estimates" Icon={monitor}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;