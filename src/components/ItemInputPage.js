import React from 'react';
import "../App.css";
export default class ItemInputPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            price: 0,
            category: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if(event.target.className === 'itemTitleInput') {
            this.setState({title: event.target.value})
        }
        if(event.target.className === 'itemPriceInput') {
            this.setState({price: parseFloat(event.target.value)})
        }
        if(event.target.className === 'itemCategoryInput') {
            this.setState({category: event.target.value})
        }
        if(event.target.className === 'itemDescrpitionInput') {
            this.setState({description: event.target.value})
        }
        
    }
    //https://reactjs.org/docs/forms.html
    render() {
        return (
            <form >
                <label>
                    Title:
                    <input type='text' className='itemTitleInput' value={this.state.title} onChange={this.handleChange}></input>
                </label>
                <label>
                    Price:
                    <input type='number' className="itemPriceInput" value={this.state.price} onChange={this.handleChange}></input>
                </label>
                <label>
                    Category:
                    <input type='text' className="itemCategoryInput" value={this.state.category} onChange={this.handleChange}></input>
                </label>
                <label>
                    Description:
                    <input type='text' className='itemDescrpitionInput' value={this.state.description} onChange={this.handleChange}></input>
                </label>
            </form>
        );
    }
}
