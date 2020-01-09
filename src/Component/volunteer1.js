import React, { Component } from 'react';
import TodoList  from './TodoList';
import '../css/volunteer1.css';


  export default class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [], text: '' };
    }

    addTodo(e) {
        e.preventDefault();
        this.setState({ todos: [ this.state.text, ...this.state.todos ] });
        this.setState({ text: ''});
    }

    updateValue(e) {
        this.setState({ text: [e.target.value]})
    }

    render() {
        return(
            <div className="volunteer1">
                <div >
               <div> NAME:Yashu.<br/></div>
                <div className="product">Email_id:yashusgowda@gmail.com</div>
                <ul>
                   <li>
                    tomoto
                </li>
                <li>
                  beans
                </li>
              
                    <TodoList todos={this.state.todos}/>
                    
                </ul>
                </div>
          <div>
                <form onSubmit = {(e) => this.addTodo(e)}>
                    <input
                        placeholder="Add Todo"
                        value={this.state.text}
                        onChange={(e) => {this.updateValue(e)}}
                    />
                    <button type="submit">Add Todo</button>
                </form>
                </div>
               
                  
            </div>
           
           
        );
    }
}



  


