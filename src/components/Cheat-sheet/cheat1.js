import React,{Component} from 'react';
import CheatSheet from './cheat_sheet';


class Cheat1 extends Component {

   
    render(){
        this.randomClass = () =>{
            return{
            width : '200px',
            height: '100px',
            backgroundColor : 'lightred'
            }
        }
       
        return(
            <div style={this.randomClass()}>
                <CheatSheet name= "Mukesh" author = "Mukesh"/>
            </div>
        )
    }
}

export default Cheat1;