import React, { Component } from 'react';
const regForName=RegExp(/^[a-zA-Z]{3,100}$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForPhone=RegExp(/^[6-9][0-9]{9}$/);

export class ApplicationForm extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:null,
            lname:null,
            email:null,
            father:null,
           qualification:null,
           gender:null,
           mobile:null,
           address:null,
           city:null,
            errors:{
                fname:'',
                lname:'',
                email:'',
                father:'',
                gender:'',
               qualification:'',
               mobile:'',
               address:'',
               city:'',
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;

            let errors=this.state.errors;

            switch(name){
                case 'fname':
                    errors.fname=regForName.test(value)? '':'FirstName should be in morethan 2 chars';
                    break;
                case 'lname':
                    errors.lname=regForName.test(value)? '':'LastName should be in morethan 2 chars';
                    break;
                case 'father':
                    errors.father=regForName.test(value)? '':'Name should be in morethan 2 chars';
                    break;

                case 'email':
                    errors.email=regForEmail.test(value)?'':'Email is not valid';
                    break;
                case 'qual':
                        errors.qualification=regForName.test(value)? '':'qualification required';
                        break;  
                case 'gender':
                        errors.gender=document.getElementsByName("gender").checked ? 'required':'';
                        break;  
                case 'mobile':
                    errors.mobile=regForPhone.test(value)  ? '':"phone number should contains 10 digit";
                    break;
                case 'address':
                        errors.address=regForName.test(value) && value.length>=10? '':'address should contains atleast 20char';
                        break;    
                case 'city':
                        errors.city=regForName.test(value)? '':'city name should be correct';
                            break;
                    break;
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           if(this.validate(this.state.errors))
           {
               alert("Application Submited");
           }
           else {
               alert("Application not valid") ;
           }
        }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
  

    render() {
        const {errors}=this.state;
        return (
            <div className="container mt-5 mb-5" >
               
                <form className="brd pl-3 pb-5 pt-5 pr-5 bg-con" onSubmit={this.formSubmit}>
                <h1 className="app-head pb-3">Application Form</h1>
                    <div className="form-group">
                        <label for="fname">First Name:</label>
                        <input type="text" className="form-control" id="fname"  name="fname" placeholder="Enter First Name" onChange={this.handler} required/>
                        {errors.fname.length>0 && 
                        <span style={{color:'red'}}>{errors.fname}</span>}<br/>
                    </div> 

                    <div className="form-group">
                        <label for="lname">Last Name:</label>
                        <input type="text" className="form-control" id="lname" name="lname" placeholder="Enter Last Name" onChange={this.handler} required/>
                        {errors.lname.length>0 && 
                        <span style={{color:'red'}}>{errors.lname}</span>}<br/>
                    </div> 

                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" onChange={this.handler} required/>
                        {errors.email.length>0 && 
                        <span style={{color:'red'}}>{errors.email}</span>}<br/>
                    </div> 
                      
                    <div className="form-group">
                        <label for="father">Fathers Name:</label>
                        <input type="text" className="form-control" id="father" name="father" placeholder="Enter Father Name" onChange={this.handler} required/>
                        {errors.father.length>0 && 
                        <span style={{color:'red'}}>{errors.father}</span>}<br/>
                    </div> 

                    <div className="form-group">
                        <label for="dob">Date-Of-Birth</label>
                        <input type="date" className="form-control" id="dob" name="dob" placeholder="DOB" onChange={this.handler} required/>
                        
                    </div> 
                    <div className="form-group">
                        <label for="qual">Qualification</label>
                        <input type="text" className="form-control" id="qual" name="qual" placeholder="Qualification" onChange={this.handler} required/>
                        {errors.qualification.length>0 && 
                        <span style={{color:'red'}}>{errors.qualification}</span>}<br/>
                    </div> 

                    <div className="form-group">
                        <label className="mr-3">Gender:</label>
                        <input type="radio" id="male" name="gender" value="male" className="mr-1 male" checked onChange={this.handler}/>
                            <label for="male" className="male">MALE</label>
                     
                        <input type="radio" id="female" name="gender" value="female" className="mr-1 ml-3 male"  onChange={this.handler}/>
                            <label for="female" className="male" >FEMALE</label>
                            {errors.gender.length>0 && 
                        <span style={{color:'red'}}>{errors.gender}</span>}<br/>
                     </div>

                     <div className="form-group">
                        <label className="mr-3 ">Occupation:</label>
                        <select id="occ" name="occ" className="occ">
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                            <option value="Business">Business</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                      <label>Intrested In:</label>
                      <input type="checkbox" id="palying" name="play" value="playing" className="ml-3" />
                      <label for="playing" className="ml-1 int">PlayingGames</label>
                      <input type="checkbox" id="palying" name="play" value="playing" className="ml-3"/>
                      <label for="playing" className="ml-1 int">Cooking</label>
                      <input type="checkbox" id="palying" name="play" value="playing" className="ml-3" />
                      <label for="playing" className="ml-1 int">ReadingBooks</label>
                      </div>

                        <div className="form-group">
                        <label for="mobile">Mobile No:</label>
                        <input type="tel" className="form-control" id="mobile" name="mobile" placeholder="Mobile Number" onChange={this.handler} required/>
                        {errors.mobile.length>0 && 
                        <span style={{color:'red'}}>{errors.mobile}</span>}<br/>
                    </div> 
                    <div className="form-group">
                        <label for="mstatus">Maritial Status:</label>
                        <input type="radio" id="single" name="single" value="single" className="ml-3" checked />
                            <label for="single" className="ml-1 int">Single</label>
                     
                        <input type="radio" id="married" name="single" value="married" className="ml-3" />
                            <label for="married" className="ml-1 int">Married</label>
                 
                     </div>
                  
                    
                    <div className="form-group">
                        <label for="address">Adress:</label>
                        <input type="text" className="form-control" id="address" name="address" placeholder="enter Correct Address" onChange={this.handler} required/>
                        {errors.address.length>0 && 
                        <span style={{color:'red'}}>{errors.address}</span>}<br/>
                    </div> 

                    <div className="form-group">
                        <label for="state" className="mr-3">State:</label>
                        <select id="state" name="state" className="occ">
                            <option value="AndhraPradesh">AndhraPradesh</option>
                             <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="TamilNadu">TamilNadu</option>
                            <option value="Telangana">Telangana</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="country" className="mr-3">Country:</label>
                        <select id="country" name="country" className="occ">
                            <option value="Australia">Australia</option>
                             <option value="Brazil">Brazil</option>
                            <option value="Combodia">Combodia</option>
                            <option value="Ethopia">Ethopia</option>
                            <option value="India">India</option>
                            <option value="UK">UK</option>
                            <option value="USA">USA</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="proof" className="mr-3">Proof Id:</label>
                        <select id="proof" name="proof" className="occ">
                            <option value="Adharcard">Adharcard</option>
                             <option value="Pancard">Pancard</option>
                            <option value="Passport">Passport</option>
                            <option value="DrivingLiecence">DrivingLiecence</option>
                            
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="city">City:</label>
                        <input type="text" className="form-control" id="city" name="city" placeholder="city" onChange={this.handler} required/>
                        {errors.city.length>0 && 
                        <span style={{color:'red'}}>{errors.city}</span>}<br/>
                    </div> 

                    <input type="submit" value="Submit" className="btn btn-success"/>
                </form>
                
            </div>
        )
    }
}

export default ApplicationForm;
