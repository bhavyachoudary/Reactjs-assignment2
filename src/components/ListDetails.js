
import React, { Component } from 'react';

export class ListDetails extends Component{
    constructor(props){
        super(props)
    }


    render(){
        
        return(
             <table border="1" className="tab">
                <thead>
               <tr>
                   <th>Sr.No</th>
                <th>Emp-Id</th>
                <th>Emp-Name</th>
                <th>Emp-Age</th>
                <th>Emp-Salary</th>
                <th>Emp-city</th>
            </tr>
            </thead>
            <tbody>
                {this.props.employee.map((item,index)=>
                <tr>
                    <td>{index+1}</td>
                   <td>{item.eid}</td>
                    <td>{item.ename}</td>
                    <td>{item.eage}</td>
                    <td>{item.esal}</td>
                    <td>{item.ecity}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
    }
     }
export default ListDetails;
