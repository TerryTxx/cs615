import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label } from 'reactstrap';
import axios from 'axios'

class AddStory extends React.Component {
  constructor(props) {
    super(props);
    // Initialize component state
    this.state = {
      modal: false,
      title:'', // State for story title
      createdBy:'', // State for created by
      count:2 // Default story count
    };
    // Bind toggle method
    this.toggle = this.toggle.bind(this);
  }
  // Handle input change
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  handleInput(e) {
     this.setState({
      [e.target.name]: e.target.value
     })
     console.log(this.state.dueDate)
}
  // Retrieve story count from server
getStoryCount = () => {
  axios.get(`/story/count`)
  .then((r)=> {
      this.setState({
          count: r.data.count, // Update story count state
          err:''
      })
  })
  .catch((e)=>{
      this.setState({
          err: e
      })
  })
}
  // Handle click event for adding a story
  handleClick = event => {
    const token = localStorage.getItem('token'); // Retrieve token from local storage
    const headers = {
      Authorization: `Bearer ${token}`  // Set Authorization header
    };
    // Retrieve story count
    this.getStoryCount()
    // Make POST request to add a story
    axios.post('/story', {
      title:this.state.title, // Story title
      createdBy:this.state.createdBy, // Created by
      storyId:this.state.count // Story ID
    },{headers})
    .then((response)=> {
      if(response.data.error)
        alert(response.data.error) // Show error message if any
      else{
        this.toggle(); // Close modal
        // Reset input fields and loading state
        this.setState({
          title:null,
          createdBy:null,
          storyId:null,
          loading:false
        })
      }
      console.log(response);
    })
    .catch((error)=> {
      console.log(error);
    });
  }
  // Toggle modal visibility
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    return (
      <div>
        <Button color="secondary" onClick={this.toggle}><i className="fas fa-plus-circle"/> Add Project</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Add Story
          </ModalHeader>
          <ModalBody>
          <FormGroup><Label for="title">Story Title(*):</Label><Input type="text" name="title" onChange={this.handleInput.bind(this)}/></FormGroup>
          <FormGroup><Label for="createdBy">Created by(*):</Label><Input type="text" name="createdBy" onChange={this.handleInput.bind(this)}/></FormGroup>

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

export default AddStory;
