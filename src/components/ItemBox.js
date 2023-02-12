import React, { Component } from 'react';
import "../App.css";

export default class ItemBox extends React.Component {
    render() {
        
        const pic =  require(this.props.imgPath);
        return (
        <div className="itemBox">
            <div classNme = "itemImage">
                <img src={pic} alt="" style={{height: '80%', width: '20%', aspectRatio: 3/2}}></img>
            </div>
            <div className='itemText'>
                <p>{"Title: "+this.props.title}</p>
                <p>{"Price: "+this.props.price}</p>
                <p>{"Category: "+this.props.category}</p>
                <p>{"Description: "+this.props.description}</p>
            </div>
        </div>
        );

    }
}