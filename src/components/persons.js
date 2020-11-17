import React from 'react';
import '../styles/persons.css';
import { Row, Col, Button , AutoComplete } from 'antd';
import axios from 'axios';
import {PersonsList} from "../services/agencyAPI";
const numbers = [2,3,4,5,6,7] ;
const doubled = numbers.map((number) => {
     return <li style={{color : 'red'}}>{number}</li>
}); 



export default class Persons extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        persons: [],
        loading: true,
        error: false,
    };


  uiCLick = () => {
    this.props.history.number.push('2');
  };




    async componentDidMount() {
        console.log('dfsgfsgfg');
        try {
            const persons = await PersonsList();
            console.log(persons + 'Inside catch');
            this.setState({ persons, loading: false });
        } catch (err) {
            console.log('outside catch', err);
            this.setState({ loading: false, error: true });
        }
    }


personsAdd(){
let newPerson = document.querySelector('AutoComplete').value;
}

  render() {
      const {error, loading, persons } = this.state;
    return (
<div>

   <ul>{doubled}</ul>
                    <Row>
                        <Col span={6}>col-12</Col>
                        <Col span={6}>
                            <div className="list" >
                                <p>something</p>
                                <p>something</p>
                                <p>something</p>
                            </div>
                        </Col>
                        <Col span={12} >
                            <header className="App-header">
                                <AutoComplete
                                    style={{
                                        width: 200,
                                        display : "inline",
                                        position : "relative"
                                    }}
                                    placeholder="input here"
                                    
                                >
                                </AutoComplete>
                                <Button onClick = "personsAdd()" style={{display : "inline", position : "relative"}} type="primary">Button</Button>
                                <br />
                            </header>
                        </Col>
                    </Row>  

                 <table id="customers">
                    <tr >
                     <th>ID</th>
                     <th>Username</th>
                     <th>Name</th>
                     <th >Email</th>
                    </tr>
                     {typeof this.state.persons !== 'undefined' &&  this.state.persons.map(person => (
                    <tr>
                    <td>{person.id}</td>
                    <td>{person.username}</td>
                     <td>{person.name}</td>
                     <td>{person.email}</td>
                    </tr>
                                                        ))}
                </table>                     
 </div>

    )
  }
}
