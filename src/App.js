import './CSS/App.css';
import { IoMdSearch } from "react-icons/io";
import logo from './algomaniac.png';
import sorting from'./images/sorting.png';
function App() {
  return (
    <div>
        <div id="container">
          <div id="image-container" >
            <img src={logo} id="picture" alt="logo"></img>
          </div>
          <div id="search-container">
            <IoMdSearch color="white" id="search-icon"/>
            <input type="text" placeholder='Search Something'></input>
          </div>
        </div>
        <div id="flex-algorithm-container">
        <div id="algorithm-container">
          <img src={sorting} id="sorting-picture" alt="logo"></img>
          <img src={sorting} id="sorting-picture" alt="logo"></img>
          <img src={sorting} id="sorting-picture" alt="logo"></img>
          <img src={sorting} id="sorting-picture" alt="logo"></img>
          </div>
        </div>
    </div>
  );
}

export default App;
