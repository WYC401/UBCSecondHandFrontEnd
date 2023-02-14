import React, { Component } from 'react';
import "../App.css";
class ItemDropdown extends React.Component {
    render() {
        return (
            <div className="ItemDropdown">
                <button>&#9660; Action</button>
                <div className='dropDownContent'>
                    <span>Delete</span>
                    <span>Modify</span>
                </div>
            </div>
        );
    }
}
export default class ItemBox extends React.Component {
    render() {
   
        return (
        <div className="itemBox">
            <div className = "itemImage">
                <img src={this.props.imgPath} alt="" style={{height: '80%', width: '40%', aspectRatio: 3/2}}></img>
            </div>
            <div className='itemText'>
                <ItemDropdown/>
                <p>{"Title: "+this.props.title}</p>
                <p>{"Price: "+this.props.price}</p>
                <p>{"Category: "+this.props.category}</p>
                <p>{"Description: "+this.props.description}</p>
            </div>
        </div>
        );

    }
}