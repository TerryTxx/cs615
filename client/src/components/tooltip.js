import React,{Component} from 'react';
import { Tooltip } from 'reactstrap';
import AddTask from './forms/addTask'; // Importing AddTask component

class Tooltips extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.toggle = this.toggle.bind(this);
    // Bind toggle method
    this.state = {
      tooltipOpen: false
    };
  }
  // Toggle tooltip visibility
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <span>
        <i className="fas fa-question-circle" id={'Tooltip-' + this.props.id} data-toggle="tooltip"></i>
        <Tooltip placement={this.props.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          {this.props.content}
        </Tooltip>
        
        <AddTask storyType={this.props.storyType} status={this.props.id}/>
      </span>
    );
  }
}
export default Tooltips;