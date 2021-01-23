import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import "./style.css";
// import API from "../services/api.js";
import employees from "/employees.json";

class Table extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employees => employees.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

// class Table extends React.Component {
//     constructor() {
//         super()
//         this.getUsers()
//     }
    
//     // Setting the initial state of the Counter component
//     state = {
//       users:[]
//     };
  
//     // handleIncrement increments this.state.count by 1
//     handleIncrement = () => {
      // We always use the setState method to update a component's state
      render() {
        return (
          <Wrapper>
            <Title>Employees Directory</Title>
            {this.state.employees.map(employees => (
              <EmployeeCard
                removeEmployee={this.removeEmployee}
                id={employees.id}
                key={employees.id}
                name={employees.name}
                position={employees.position}
                email={employees.email}
                department={employees.department}
              />
            ))}
          </Wrapper>
        );
      }  
    
    };
    // getUsers() {
    //     return API.getUsers()
    //     .then(function(results){
    //         console.log(results)
    //         this.setState({ users: results.data});
    //     })
    // }
    // The render method returns the JSX that should be rendered


export default Table;