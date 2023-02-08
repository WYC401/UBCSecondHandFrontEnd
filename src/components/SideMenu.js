import React from 'react';
import "../App.css";
class MenuItem extends React.Component {
    render() {
       return (
       <div><a href={this.props.link}> {this.props.name} </a></div>
       );
    }
}

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    render() {
        return (
            <div id="ItemSideMenu" className="sidenav">
             <MenuItem link="" name="Post History"/>
             <MenuItem link="" name="Post New Item"/>
            </div>
        )
        
    }
}

