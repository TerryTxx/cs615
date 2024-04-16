import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label } from 'reactstrap';
import moment from 'moment' // Importing moment library for date manipulation
import axios from 'axios' // Importing axios for making HTTP requests


class AddModal extends React.Component {
  constructor(props) {
    super(props);
      // Initialize component state
    this.state = {
      modal: false,
      title:'',
      content:'',
      contributors:'',
      createdBy:'643ad95561e62835738acf4e',
      dueDate:'',
      status:this.props.status,
      color:'',
      storyId:this.props.storyType,
      loading:false,
      users:[] // Array to store users fetched from the server
    };
      // Bind toggle method
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    moment.locale('tr'); // Set moment locale to Turkish
    this.changeColumnTitle() // Fetch users from the server
  }
  changeColumnTitle = number=>{
    let newTitle;
    if(number==="1")
      newTitle="Backlog"
    else if(number==="2")
      newTitle="ToDo"
    else if(number==="3")
      newTitle="In Progress"
    else
      newTitle="Done"

    return newTitle;
  }
  handleInput(e) {
     this.setState({
      [e.target.name]: e.target.value
     })
     console.log(this.state.dueDate)
}
// Method to fetch users from the server
getUsers(){
  axios.get('/users')
  .then((r)=> {
      // Update state with fetched users
      this.setState({
          users: r.data,
          err:''
      })
  })
  .then((r)=>{
    console.log(this.state.users)
  })
  .catch((e)=>{
      this.setState({
          err: e
      })
  })
}
    // Method to handle click event for adding a task
  handleClick = event => {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      const headers = {
          Authorization: `Bearer ${token}` // Set Authorization header
      };
      console.log(headers)
      // Make POST request to add a task
    axios.post('/tasks', {
      title:this.state.title,
      content:this.state.content,
      status:this.props.status,
      contributors:this.state.contributors,
      dueDate:this.state.dueDate,
      color:this.state.color,
      storyId:this.state.storyId,
      createdBy:this.state.createdBy
    },{ headers: headers })
    .then((response)=> {
      if(response.data.message)
        alert(response.data.message) // Show success message if any
      else{
        this.toggle(); // Close modal
          // Reset input fields and loading state
        this.setState({
          title:null,
          content:null,
          contributors:null,
          dueDate:null,
          loading:false
        })
      }
      console.log(response);
    })
    .catch((error)=> {
      console.log(error);
    });

  }
    // Method to toggle modal visibility
  toggle() {
    this.getUsers();
    this.setState({
      modal: !this.state.modal
    });
  }
    // Render user options
  render() {
    const {users} = this.state;
    let userContent;
    if(!users)
      userContent = <option value="">Loading...</option>
    else{
      userContent = users.map((user,index)=>(
              <option key={index} value={user._id}>{user.name + " " + user.lastName}</option>
      ))
    }
    return (
      <div>
        <i className="fas fa-plus-circle customAddTask" onClick={this.toggle}></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Create a New Task to {this.changeColumnTitle(this.props.status)}
          </ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="title">Task Title(*):</Label><Input type="text" name="title" id="taskTitle" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup>
          <Label for="content">Task Details:</Label>
          <Input type="textarea" name="content" id="content" onChange={this.handleInput.bind(this)}/>
        </FormGroup>
        <FormGroup>
            <Label for="contributors">Assign to:</Label>
            <Input type="select" name="contributors" id="contributors" onChange={this.handleInput.bind(this)}>
                <option value="">Choose:</option>
                {userContent}
            </Input>
          </FormGroup>
        <FormGroup>
            <Label for="color">Task Color:</Label>
            <Input type="select" name="color" id="color" onChange={this.handleInput.bind(this)}>
                <option value="">Choose:</option>
                <option value="colorBlue">Red</option>
                <option value="colorGreen">Green</option>
                <option value="colorGrey">Grey</option>
            </Input>
          </FormGroup>
              <hr/>
              <i className="fas fa-calendar-alt"></i> Created Date: {moment().format('L, h:mm:ss')} <br/>
              <i className="fas fa-clock"></i> Due Date: <input name="dueDate" id="dueDate" type="datetime-local" onChange={this.handleInput.bind(this)}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleClick.bind(this)}><i className="fas fa-plus-circle"></i> Add</Button>
            <Button color="secondary" onClick={this.toggle}><i className="fas fa-times-circle"></i> Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
