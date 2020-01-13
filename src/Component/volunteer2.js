// import React, { Component } from 'react';
// import TodoList  from './TodoList';
// import '../css/volunteer1.css';
// import { Nav } from 'react-bootstrap';
// import Navbar from './Navbar';
// import Footer from './Footer';
// // import Admin from './Admin';


//  class volunteer2 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { todos: [], text: '' };
//     }

//     addTodo(e) {
//         e.preventDefault();
//         this.setState({ todos: [ this.state.text, ...this.state.todos ] });
//         this.setState({ text: ''});
//     }

//     updateValue(e) {
//         this.setState({ text: [e.target.value]})
//     }

//     render() {
//         return(
//             <div>
//             <div className="volunteer1">
//                 <div >
//                <div> NAME:Bindu.<br/></div>
//                 <div className="product">Email_id:Bindusgowda@gmail.com</div>
//                 <ul>
//                    <li>
//                     tomoto
//                 </li>
//                 <li>
//                   beans
//                 </li>
              
//                     <TodoList todos={this.state.todos}/>
                    
//                 </ul>
//                 </div>
//           <div>
//                 <form onSubmit = {(e) => this.addTodo(e)}>
//                     <input
//                         placeholder="Add Todo"
//                         value={this.state.text}
//                         onChange={(e) => {this.updateValue(e)}}
//                     />
//                     <button type="submit">Add Todo</button>
//                 </form>
//                 </div>
               
               
                  
//             </div>
//              <Navbar/>
//              <Footer/>
//              </div>
           
           
//         );
//     }
// }
// export default volunteer2;


  


