import React from "react";
// import "./style.css";
import API from "../services/api.js";

class Table extends React.Component {
    constructor() {
        super()
        this.getUsers()
    }
    // Setting the initial state of the Counter component
    state = {
      users:[]
    };
  
    // handleIncrement increments this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      
    };
    getUsers() {
        return API.getUsers()
        .then(function(results){
            console.log(results)
            this.setState({ users: results.data});
        })
    }
    // The render method returns the JSX that should be rendered
    render() {
      return (
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            Click Counter!
          </div>
          <div className="card-body">
              {this.state.users}
          </div>
        </div>
      );
    }
  }
  

export default Table;