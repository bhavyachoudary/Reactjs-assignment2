import React, { Component } from 'react';

import ListDetails from './ListDetails';


export class List extends Component {
    constructor(props){
        super(props);
        this.state={
           employee:[
               {eid:101,ename:"Jhon",eage:22,esal:50000, ecity:"Hyderabd"},
               {eid:102,ename:"Marry",eage:32,esal:60000, ecity:"Bangalore"},
               {eid:103,ename:"Mark",eage:28,esal:70000, ecity:"Chennai"},
               {eid:104,ename:"Anuj",eage:25,esal:80000, ecity:"Kerala"},
               {eid:105,ename:"Sani",eage:36,esal:90000, ecity:"Pune"},
               {eid:106,ename:"Ambi",eage:38,esal:100000, ecity:"Delhi"},
               {eid:107,ename:"Sunny",eage:42,esal:150000, ecity:"Mumbai"},
               {eid:108,ename:"Tom",eage:22,esal:120000, ecity:"Indore"},
               {eid:109,ename:"Santa",eage:40,esal:130000, ecity:"BAngalore"},
               {eid:110,ename:"Cinda",eage:30,esal:60000, ecity:"Hyderabad"},
               {eid:111,ename:"Jerry",eage:35,esal:70000, ecity:"Chennai"},
               {eid:112,ename:"Elson",eage:26,esal:50000, ecity:"Pune"},
               {eid:113,ename:"Beriden",eage:29,esal:80000, ecity:"Mysore"},
               {eid:114,ename:"Jill",eage:42,esal:90000, ecity:"Mumbai"},
               {eid:115,ename:"Bunty",eage:32,esal:60000, ecity:"Jammu"},
               {eid:116,ename:"Musk",eage:36,esal:120000, ecity:"Delhi"},
               {eid:117,ename:"Kent",eage:39,esal:30000, ecity:"Jaipur"},
               {eid:118,ename:"Lilly",eage:28,esal:40000, ecity:"gujarat"},
               {eid:119,ename:"Loren",eage:30,esal:60000, ecity:"Chennai"},
               {eid:120,ename:"Kim",eage:37,esal:80000, ecity:"Hyderabad"},
           ]
      

        }
    }
    render() {
        return (
            <div className="container bg-warning pb-4">
                <h1 className="pt-3 pb-3 emp">Employee Details</h1>
                <ListDetails employee={this.state.employee}/>
            </div>
        )
    }
}

export default List
