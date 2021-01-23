import React from "react";
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import "./style.css";
import employees from "/employees.json";

class Table extends Component {
  state = {
    employees
  };

  removeEmployee = id => {
    const employees = this.state.employees.filter(employees => employees.id !== id);
    this.setState({ employees });
  };

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

export default Table;