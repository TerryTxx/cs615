import React,{Component} from 'react'
import moment from 'moment'
import ModalExampleDimmer from './modal' // Importing ModalExampleDimmer component
import axios from 'axios'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
import Loader from './loader';
class Task extends Component{
    // Lifecycle method to handle when component receives new props
  componentWillReceiveProps(){
      // Make ".mcell-task" elements draggable
  
    $(".mcell-task").draggable({
      appendTo: "body",
      cursor: "move",
      helper: 'clone',
      revert: "invalid"
  });
      // Make ".mcell" elements droppable
  $(".mcell").droppable({
      tolerance: "intersect",
      accept: ".mcell-task",
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function(event, ui) {        
          $(this).append($(ui.draggable));
          console.log($(this).find("li").attr('id'))
      }
  });
  }

    // API call to delete a task
api = id => {
  axios.delete('/tasks/delete/'+id)
  .then(function (response) {
    if(response.status==="1")
      alert("ok")
    console.log(response);
  })
  .then(()=>{
    
  })
  .catch(function (error) {
    console.log(error);
  });

}
  render(){
    const {tasks,loading,filter} = this.props;
      let content;
      // Display loader while loading
      if (loading) {
        content = <div className="loader">
         <Loader/>
          </div>;
      }
      else{
          // Render tasks
        content = 
        tasks.filter(i=>i.status===Number(filter))
        .map((i,index)=>{
          return(
            <li id={i._id} className="mcell-task" key={index}>
              <span className="task-name">
                <span>{i.title}</span>
                <i id="delete" className="fas fa-times" onClick={() => this.api(i._id)}></i>
              </span>
              <span className="task-details">{i.content}</span>
              <div>
              <span className="task-due">{moment(i.dueDate).format("DD.MM.YYYY")}</span>
              <span className="task-contributors">
                <img alt={i.contributors[0].name + ' '+i.contributors[0].lastName } title={i.contributors[0].name + ' '+i.contributors[0].lastName } src={'/assets/img/' + i.contributors[0].profilePhoto}/>
              </span>
            </div>
            <div className={i.color}/>
            <ModalExampleDimmer propContent={i} classType="btnDashboard"/>
            </li>
          )
        })
    }
    return(
      <div className="process">{content}</div>
    )
  }
}
export default Task;