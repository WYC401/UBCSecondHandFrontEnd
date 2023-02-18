import logo from './logo.svg';
import './App.css';
import SideMenu from"./components/SideMenu.js";
import UpperMenue from './components/UpperMenue';
import ItemBox from './components/ItemBox';
import React, { Component } from 'react';
import ItemInputPage from './components/ItemInputPage';
import SearchBox from './components/FilterBox';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atHistoryPage: true,
      atWhichPage: "search"
    };
    this.handleSideMenuClick = this.handleSideMenuClick.bind(this);

    this.handleUpperMenuClick = this.handleUpperMenuClick.bind(this);
  }
  handleSideMenuClick(name) {
    if(name==="Post New Item") {
      this.setState({atHistoryPage: false});
    } else {
      this.setState({atHistoryPage: true});
    }
  }

  handleUpperMenuClick(name) {
    if(name === "Search Page") {
      this.setState({ atWhichPage: "search"})
    }

    if(name === "Item Page") {
      this.setState({ atWhichPage: "item"})
    }
  }

  render() {
    
    const itemList = [
      {
        id:"1",
        imgPath: "https://images2.giant-bicycles.com/b_white,c_pad,h_850,q_80/pbbsrk9upf0yug7yp3oa/MY22ATX27-5_ColorBVibrantBlue.jpg",
        title: "Road Bike",
        price: "20",
        category: "bike",
        description: "This is a bike"
      },
      {
        id: "2",
        imgPath: "https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG",
        title: "Use Iphone",
        price: "100",
        category: "cell phone",
        description: "a 95% new iphone only used for 2 months"
      }
    ]
    //console.log(itemList);
    const ItemBoxList = itemList.map((item)=>{
      return <li key={item.id}>{<ItemBox imgPath={item.imgPath} title={item.title} price={item.price} category={item.category} description={item.description}/>}</li>
    });
    let MainPageItem = null; 
    if(this.state.atHistoryPage) {
      MainPageItem =  <div className="main"><ul>{ItemBoxList}</ul></div>;
    }else {
      MainPageItem = <div className='main'><ItemInputPage/></div>
    }
    let MainPage = null;
    if(this.state.atWhichPage === "search") {
      MainPage = <div><SearchBox/></div>
    } else if(this.state.atWhichPage === "item") {
      MainPage = (
        <div  className="downBackground">
        <SideMenu onClick={this.handleSideMenuClick}/>
        {MainPageItem}
      </div>
      )
    }
    //console.log(ItemBoxList);
    return (
      <div className='wholeBackground'>
      <UpperMenue onClick={this.handleUpperMenuClick}/>
      {MainPage}
      </div>
    );
  }
  
  
}

