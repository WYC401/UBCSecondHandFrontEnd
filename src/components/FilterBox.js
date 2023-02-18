import React, { Component } from 'react';
import "../App.css";
export default class SearchBox extends React.Component {

    handleChange(event) {
        this.props.onSearchStringChange(event.target.value);
    }

    render() {
        let category=["Vehicle", "Book", "Other", "Appliance", "--Please choose an option--"]
        const categoryReact = category.map((c)=> {return <option value={c} key={c}>{c}</option>})
        return (
            <div className="searchBox">
                <input type='Text' value={this.props.searchString} onChange={this.props.handleChange}/>
                <label for="priceRange">Choose a price range</label>
                <select id="priceRange">
                    <option value="">--Please choose an option--</option>
                    <option value="0,25">0~25</option>
                    <option value="25,50">25-50</option>
                    <option value="50,100">50-100</option>
                    <option value="100,200">100-200</option>
                    <option value="200,500">200-500</option>
                    <option value=">500">{">500"}</option>
                </select>
                <label for="category">Choose a Category</label>
                <select id="category">
                    {categoryReact}
                </select>
            </div>
            
        )

    }
}
