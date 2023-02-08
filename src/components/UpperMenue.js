import React from 'react';
import "../App.css";
import profilePic from "../images/logo192.png";
import ubcPic from "../images/ubc-logo.png";
class Profile  extends React.Component {
    render() {
        return (<img src={profilePic} alt="" style={{height: '100%', width: '20%', aspectRatio: 3/2}}></img>) ;
    }
}

class UBCLogo extends React.Component {
    render() {
        return (<img src={ubcPic} alt="" style={{height: '100%', width: '20%', aspectRatio: 3/2}} ></img>);
    }
}

export default class UpperMenue extends React.Component {
    render() {
        return(
            <div className='upperMenue'>
                <UBCLogo/>
                <Profile/>
            </div>  
        ); 
    }
}
