import React, { Component } from 'react';
import json from '../CartItem.json';

let arr=[]
export class CartItems extends Component {
    constructor(props){
        super(props);
        this.state={
            cart1:0
        }
    }

    componentDidMount(){
        if(localStorage.getItem('mycart')!=undefined){
            
            arr=JSON.parse(localStorage.getItem('mycart'));
            this.setState({cart1:arr.length});
        }
        
    }

    addToCart(item){
        var flag=0;
        if(localStorage.getItem('mycart')!=undefined){
            arr=JSON.parse(localStorage.getItem('mycart'));
            arr.map((obj)=>
            {if(obj.id==item.id){
                obj.pquantity++
                localStorage.setItem('mycart',JSON.stringify(arr));
               
                flag=1;
            
            }})
            if(flag==0){
                arr.push(item);
                localStorage.setItem('mycart',JSON.stringify(arr));
            }
            
        }
        else{
            arr.push(item);
            localStorage.setItem('mycart',JSON.stringify(arr));
        }
        console.log(arr);
        this.count()
    
    }
    count(){
        let arr=JSON.parse(localStorage.getItem('mycart'));
        this.setState({cart1:arr.length});

    }
   
    render() {
        return (
            <div className="container bg-con1 mt-4 mb-4">
            <nav className="pt-3 pb-3">
            <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#" >Cart{this.state.cart1}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Disabled</a>
        </li>
        <hr/>
      </ul>
            </nav>
            <div className="pt-3 ">
                <h1>List of items</h1>
                <div className="row ">
                 
                   {json.CartItem.map((items,index)=>
                    <div className="col-md-4 pt-4 pb-4" key={index}>
                     <div className="card  card1 text-center">
                        <img src={items.image}/>
                        <h5 style={{fontSize:"22px",color:"balck"}}>id:{items.id}</h5>
                        <h6 style={{fontSize:"20px",color:"green"}}>Name:{items.pname}</h6>
                        <p style={{fontSize:"20px",color:"grey"}}>price:{items.pprice}</p>
                        <p style={{fontSize:"16px",color:"black"}}>Quantity:{items.pquantity}</p>
                       
                    </div>
                    <button className="btn btn-warning mt-3 mb-3" onClick={()=>this.addToCart(items)}><i class="fas fa-shopping-cart pr-1"></i>Add To Cart</button>
                </div>

             )}
            
        </div>
        <h2>Cart list with details</h2>
               <table border="1">
                   <thead>
                       <tr>
                           <th>Sr.No</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>
                            Quantity
                        </th>
                        <th>Total</th>
                       </tr>
                   </thead>
                   <tbody>
                       {arr.map((list,index)=>
                       <tr>
                    <td>{index+1}</td>
                    <td>{list.id}</td>
                    <td>{list.pname}</td>
                    <td>{list.pprice}</td>
                    <td>{list.pquantity}</td>
                    <td>{list.pquantity* list.pprice}</td>
                       </tr>
                       )}
                    
                   </tbody>
               </table>
            
                 
            </div>
            </div>
        )
    }
}

export default CartItems
