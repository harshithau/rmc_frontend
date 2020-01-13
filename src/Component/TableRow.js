import React, { Component } from 'react';
import axios from 'axios';

class TableRow extends Component {
constructor(props) {
super(props);

}
delete=()=> {
axios.delete(`http://localhost:4013/volunteer/${this.props.obj._id}`)
.then(console.log('Deleted'))
.catch(err => console.log(err))
window.location.reload();
}
edit=()=> {
axios.put(`http://localhost:4013/volunteer/${this.props.obj._id}`)
.then(console.log('edited'))
.catch(err => console.log(err))
window.location.reload();
}

handlechange=(event)=>{
this.setState({ [event.target.name]: event.target.value });
}
// post=()=>{
// this.setState({post1:this.state.post})
// }
render() {
return (
<table>
<tr>
<td>
{this.props.obj.volunteerName}<br></br>
{/ {this.state.post1} /}
</td>
<td>
<button onClick={this.delete} className="btn btn-danger">Delete</button>
</td>
<td>
<button onClick={this.edit} className="btn btn-danger">Edit</button>
</td>
</tr>
<tr>
<td>
{this.state.post1}
</td>

</tr>
<tr>
<td>
<input type="text" name="post" onChange={this.handlechange}></input>
</td>
<td>
<button onClick={this.post}>PostAnswer</button>
</td>
</tr>
</table>
);
}
}

export default TableRow;