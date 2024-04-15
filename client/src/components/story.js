import React,{Component} from 'react'
import Task from './task'
import Tooltips from './tooltip'
export default class Story extends Component{
    render(){
        return(
            <div className="container">
                      <div className="space">
                          <h2 className="story">{this.props.storyName[0] ? this.props.storyName[0].title : "Loading..."}</h2>
                      </div>
                        <div className="row">
                          <div className="col-sm mcell mcolor1">
                            <div className="mcell-title story">
                            <b className="fas fa-lightbulb"/> Backlog
                                <Tooltips id="1" content="You can do what you want to do with this column" placement="top" storyType={this.props.storyType}/>
                            </div> // Renders tasks filtered by ID "1" (Backlog) within the Backlog column.
                                <Task tasks={this.props.tasks} loading={this.props.loading} filter="1"/> // Retrieves the title of the first story from props, or displays "Loading..." if no story is available.
                          </div>
                          <div className="col-sm mcell mcolor2">
                              <div className="mcell-title story"> // Displays the TODO column with an icon and tooltip for additional information.
                              <b className="fas fa-bars"/> TODO
                                <Tooltips id="2" content="You can do what you want to do with this column" placement="top" storyType={this.props.storyType}/>
                              </div> // Renders tasks filtered by ID "2" (TODO) within the TODO column.
                              <Task tasks={this.props.tasks} loading={this.props.loading} filter="2"/>
                          </div>
                          
                          <div className="col-sm mcell mcolor3">
                              <div className="mcell-title story">
                              <b className="fas fa-spinner"></b> In Progress
                                <Tooltips id="3" content="You can do what you want to do with this column" placement="top" storyType={this.props.storyType}/>                              </div>
                              <Task tasks={this.props.tasks} loading={this.props.loading} filter="3"/>
                          </div>
                          <div className="col-sm mcell mcolor4">
                              <div className="mcell-title story">
                              <b className="fas fa-check"/> Done
                                <Tooltips id="4" content="You can do what you want to do with this column" placement="top" storyType={this.props.storyType}/>                              </div>
                              <Task tasks={this.props.tasks} loading={this.props.loading} filter="4"/> //This component represents a Task component with props passed to it
                            </div>
                        </div>
                      </div>
        )
    }
}