import React from "react";
import Employee from "../Models/Employee";

export default class StudentComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            employee : new Employee(),
            employees:[]

        }
    }

    render(){
        const handleDelete = (id) => {
            const newList = this.state.employees.filter((s) => s.id !== id);
            this.setState({employees: newList})
        } 

        const handleModify = (id,e) => {
          const list = this.state.employees.filter((s) => {
              if(s.id===id){
              this.setState({...this.state.employee, employee:{name:e.target.value}})
          }
             return this.state.employee;
        });
            console.log(list)
          
        }

        return(
            <div>
            <h1><span className="badge badge-dark">Employee form</span></h1>

            <form>
                <div className="form-group">
                    <input type="text" id="empid" className="form-control"
                    placeholder="Enter employee Id"
                    value={this.state.employee.id}
                    onChange={
                        (e) => {
                            console.log(e.target.value);
                            this.setState({employee: {...this.state.employee, id: e.target.value}})
                        }
                    }
                    />
                </div>

                <div className="form-group">
                    <input type="text" id="empname" 
                    className="form-control" 
                    placeholder="Enter Employee name"
                    value={this.state.employee.name}
                    onChange={
                        (e) => {
                            this.setState({employee: {...this.state.employee, name: e.target.value}})
                        }
                    }
                    />
                </div>
                <div className="form-group">
                  <input type="text" id="salary" 
                    className="form-control" 
                    placeholder="Enter Salary"
                    value={this.state.employee.salary}
                    onChange={
                    (e) => {
                        this.setState({employee: {...this.state.employee, salary: e.target.value}})
                    }
                }
                  />
                </div>

                <div className="form-group">
                  <input type="text" id="empdept" 
                    className="form-control" 
                    placeholder="Enter Department"
                    value={this.state.employee.department}
                    onChange={
                    (e) => {
                        this.setState({employee: {...this.state.employee, department: e.target.value}})
                    }
                }
                  />
                </div>

                <div className="form-group">
                    <button 
                    className="btn btn-primary"
                    onClick={
                        (e)=>{
                            e.preventDefault();
                            this.state.employees.push(this.state.employee)
                            this.setState({employees: this.state.employees})
                        }
                    }
                    > Add Employee </button>
                </div>
                
            </form>
            
            {
                            this.state.employees.length>0 ? (
                                <table className="table table-bordered">
                                    <thead>
                                        <th>Employee Id</th>
                                        <th>Employee name</th>
                                        <th>Salary</th>
                                        <th>Department</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </thead>
                                    <tbody>
                                        {this.state.employees.map((s)=>(
                                             <tr>
                                             <td>{s.id}</td>
                                             <td>{s.name}</td>
                                             <td>{s.salary}</td>
                                             <td>{s.department}</td>

                                             <td><button
                                                className="btn btn-warning"
                                                onClick={(e) => handleModify(s.id,e)}
                                                > Update </button>
                    
                                            </td>
                                             <td><button className="btn btn-danger"
                                            onClick={()=> handleDelete(s.id)} 
                                            >Delete</button></td>

                                         </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            ) : null
                        }     
            
        </div>
        );
    }
}