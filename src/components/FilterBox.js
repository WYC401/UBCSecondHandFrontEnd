import React, { Component } from 'react';
import "../App.css";
export default class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if(event.target.id === "searchString") {
            this.props.onSearchStringChange(event.target.value);
        }
        if(event.target.id === "priceRange") {
            this.props.onPriceRangeChange(event.target.value);
        }
        if(event.target.id === "category") {
            this.props.onCategoryChange(event.target.value);
        }
        
    }

    render() {
        let category=["Vehicle", "Book", "Other", "Appliance", "--Please choose an option--"]
        const categoryReact = category.map((c)=> {return <option value={c} key={c}>{c}</option>})
        return (
            <div className="searchBox" style={{position: "absolute",width: "70%", left: "15%", right:"15%", top: "10%",height :"20%", padding: "10px", display: "block"}}>
                <div style={{width: "100%"}}>
                    <input type='Text' value={this.props.searchString}  id="searchString" onChange={this.handleChange} style={{height: "30px", size:"100%"}}/>
                </div>
                <div>
                    <label for="priceRange" id="priceRange">Choose a price range</label>
                    <select id="priceRange" value={this.props.priceRange} onChange={this.handleChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="0,25">0~25</option>
                        <option value="25,50">25-50</option>
                        <option value="50,100">50-100</option>
                        <option value="100,200">100-200</option>
                        <option value="200,500">200-500</option>
                        <option value=">500">{">500"}</option>
                    </select>
                    <label for="category" id="category">Choose a Category</label>
                    <select id="category" value={this.props.category} onChange={this.handleChange}>
                        {categoryReact}
                    </select>
                </div>
                
            </div>
            
        )

    }
}
