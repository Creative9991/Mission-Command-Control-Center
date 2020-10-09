import { message } from 'antd';
import React, {Component} from 'react';
import axios from 'axios';




class Contact extends Component {
    constructor(props){
        super(props);
        this.state =  {
         message : 'hello'
        }
    this.clickHandler = this.clickHandler.bind(this)
    }

   
      



   



clickHandler = () => {
    this.setState({
        persons: [],
                message : 'Good bye!!!'
            })
            this.message.style = {color : 'red'}
}

render(){

    return(

        <div>
            {this.state.message}
            <button type = "button">Click here</button>
        </div>
    )
}

}
export default Contact;
