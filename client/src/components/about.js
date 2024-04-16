import React,{Component} from 'react'
import Header from './common/header'
class About extends Component{

    render(){
        return(
            <div>
              
              <Header/>
              
                  <aside className="container">
                    <div className="col-sm aboutUs">
                        <h2 className="mcell-title story">Abous Us</h2>
                        <div className="padding21">@Xiaoxu Tan</div>
                        <div className="padding21">@Xinming Liao</div>
                        <div className="padding21">@Sarbojit Bhattacharjee</div>
                        <div className="padding21">@Felicita Florence Clement</div>
                        <div className="padding21">@Steffi Evangeline Banans</div>
                    </div>
                    <div className="mission-statement">
                <h3>Mission Statement</h3>
                <p>
                    Our mission is to provide a collaborative task tool that empowers teams
                     to efficiently organize, track, and complete tasks,
                      fostering productivity and teamwork.
                </p>

                <h3>Teamwork Starts Here !!</h3>
            </div>
                    
                  </aside>

                  
            </div>
        )
    }
}
export default About