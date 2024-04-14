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
                  </aside>
                  <div class="col-sm aboutUs">
        <h2 class="mcell-title story">Our Mission</h2>
        <div class="padding21">Empower teams to achieve their full potential by providing a seamless and intuitive platform for collaboration</div>
        <div class="padding21">we aim to redefine the way teams collaborate and unlock new levels of efficiency and success in the modern workplace.</div>
        <div class="padding21"><h2>Unleash Team Synergy, One Task at a Time.</h2></div>
    </div>
            </div>


        )

    }
}
export default About