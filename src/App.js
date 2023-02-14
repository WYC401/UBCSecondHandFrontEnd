import logo from './logo.svg';
import './App.css';
import SideMenu from"./components/SideMenu.js";
import UpperMenue from './components/UpperMenue';
import ItemBox from './components/ItemBox';
import React, { Component } from 'react';



export default class App extends React.Component {

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
    console.log(itemList);
    const ItemBoxList = itemList.map((item)=>{
      return <li key={item.id}>{<ItemBox imgPath={item.imgPath} title={item.title} price={item.price} category={item.category} description={item.description}/>}</li>
    });
    console.log(ItemBoxList);
    return (
      <div className='wholeBackground'>
      <UpperMenue/>
      <div  className="downBackground">
        <SideMenu/>
        <div className="main"><ul>{ItemBoxList}</ul></div>
      </div>
      </div>
    );
  }
  
  
}

