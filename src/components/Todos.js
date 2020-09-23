import React, {Component} from 'react';
import Todoitem from "./Todoitem";
import PropsTypes from 'prop-types';

class Todos extends Component {

 render(){
console.log(this.props.todos);

      return this.props.todos.map((todo)=> (
          <Todoitem key={todo.key} todo={todo} markComplete = {this.props.markComplete}/>
      ));
 }
}
Todos.propstype = {
    todos : PropsTypes.array.isRequired
};
export default Todos;
