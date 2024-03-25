import React from 'react'
import '../../CSS/App.css';
import { IoMdSearch } from "react-icons/io";
import logo from '../../algomaniac.png';
import sorting from'../../images/sorting.png';


function FrontPage() {
    return (
        <div>
            <div id="container">
              <div id="image-container" >
                <img src={logo} id="picture" alt="logo"></img>
              </div>
              <div id="search-container" >
                <IoMdSearch color="white" id="search-icon"/>
                <input type="text" placeholder='Search Something'></input>
              </div>
            </div>
            <div id="flex-algorithm-container"style={{backgroundColor:'#486581'}}>
            <div id="algorithm-container">
              <a href="/sorting"><img src={sorting} id="sorting-picture"  alt="logo"></img></a>
            </div>
            </div>
        </div>
      );
}

export default FrontPage;

