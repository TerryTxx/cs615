import React,{Component} from 'react'
// Define a Loader component
export default class Loader extends Component{
    render(){
        // Render an SVG loader with a circle
    return(
        <svg viewBox="25 25 50 50">
   <circle cx="50" cy="50" r="20" fill="none"/>
</svg>
    )
}
}