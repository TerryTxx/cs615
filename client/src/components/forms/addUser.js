import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label } from 'reactstrap';
import axios from 'axios'  // Importing axios for making HTTP requests

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    // Initialize component state
    this.state = {
      modal: false,
      username:'',
      name:'',
      lastname:'',
      profilePhoto:'643ad95561e62835738acf4e', // Default profile photo ID
      loading:false
    };
    // Bind toggle method
    this.toggle = this.toggle.bind(this);
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }
<<<<<<< Updated upstream
  // Method to handle input change
=======

  // Function to handle input changes
>>>>>>> Stashed changes
  handleInput(e) {
     this.setState({
      [e.target.name]: e.target.value
     })
     console.log(this.state.dueDate)
}
<<<<<<< Updated upstream
  // Method to handle click event for adding a user
=======
// Function to handle click event on add button
>>>>>>> Stashed changes
  handleClick = event => {
    
    axios.post('/users', {
      username:this.state.username,
      name:this.state.name,
      lastName:this.state.lastName,
      profilePhoto:this.state.profilePhoto
    })
    .then((response)=> {
      if(response.data.message)
        alert(response.data.message)  // Show success message if any
      else{
        this.toggle(); // Close modal
        // Reset input fields and loading state
        this.setState({
          username:null,
          name:null,
          lastName:null,
          profilePhoto:null,
          loading:false
        })
      }
      console.log(response);
    })
    .catch((error)=> {
      console.log(error);
    });
    
  }
<<<<<<< Updated upstream
  // Method to toggle modal visibility
=======

  // Function to toggle modal
>>>>>>> Stashed changes
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    return (
      <div>
        <i className="fas fa-user-plus" onClick={this.toggle}></i>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
          <i className="fas fa-user-circle"></i> Add User
          </ModalHeader>
          <ModalBody>
          <FormGroup><Label for="username">Username(*):</Label><Input type="text" name="username" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup><Label for="name">Name(*):</Label><Input type="text" name="name" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup><Label for="lastName">Last Name(*):</Label><Input type="text" name="lastName" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup><Label for="profilePhoto">Profile Photo URL:</Label><Input type="text" name="profilePhoto" onChange={this.handleInput.bind(this)}/></FormGroup>
          
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

export default AddUser;