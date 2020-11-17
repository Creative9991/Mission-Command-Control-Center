import React, {Component} from 'react';
import axios from 'axios';
import { Input } from 'antd';



class Contact extends Component {
    
    constructor(props){
        super(props);
        this.state =  {
         message : 'hello'
        }
    this.clickHandler = this.clickHandler.bind(this)
    }
    listStyle = () => {
        return{
       color : 'red',
       textDecoration : 'none'
        }
    };

   async componentDidMount(){
       try { axios.get('http://localhost:3100/users').then(res=>{
            const users = res.data;
            this.setState({ users });
        })
   } catch(err){
    console.error(`Something went wrong fetching the data: ${err}`);
    throw err;
   }
    }

clickHandler = () => {
    this.setState({
        persons: [],
                message : 'Good bye!!!'
            })
}



render(){

// const myTestArray = [2,3,34,5];
// myTestArray.splice(1, 1);
// myTestArray.unshift('higref');
// myTestArray.splice(2, 0 , 'hfghf', 'dfdfdf');
// myTestArray.splice(0);
// console.log(myTestArray);

    let favSuperHeros = ['Batman','Spiderman','Hulk','Ironman'];
    favSuperHeros.sort();
let myList = favSuperHeros.map((favSuperHeros) => <li>{favSuperHeros}</li>)



    return(

        <div>
            <p style={{color: 'red'}}>{this.state.message}</p>
            <button type = "button" onClick={this.clickHandler}>Click here</button>
            <p className= "myPara"></p>
            <ul style={this.listStyle()}>
                {myList}
            </ul>
            <Input placeholder="Basic usage" />
            <table id="persons" style={{color :'red'}}>
            <tr >
                     <th>Address</th>
                     <th>City</th>
                     <th>Email</th>
                     <th >ID</th>
                     <th>Name</th>
                     <th>Phone</th>
                     <th>Postalcode</th>
                     <th>Surname</th>
                    </tr>
                    {   
                        typeof this.state.users !== 'undefined' && typeof this.state.users.users !== 'undefined' &&  this.state.users.users.map(person => {
                            return (
                                <tr>
                                <td>{person.address}</td>
                                <td>{person.city}</td>
                                 <td>{person.email}</td>
                                 <td>{person.id}</td>
                                 <td>{person.name}</td>
                                 <td>{person.phone}</td>
                                 <td>{person.postalCode}</td>
                                <td>{person.surname}</td>
                                </tr>
                            )
                        })}                               
                </table>  
        </div>
    )
}

}
export default Contact;
