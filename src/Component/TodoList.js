import React, { Component } from 'react';
import { connect } from 'react-redux';

 class TodoList extends Component {
    removeItem(e) {
        // splice this.props.todos??
    }
    render() {
        return(
            <ul>
                { this.props.todos.map((todo) => {
                    return <li onClick={(e) => { this.removeItem(e)}} key={todo}>{ todo }</li>
                })}
            </ul>
        );
    }
}
export default connect()(TodoList);