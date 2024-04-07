import './CSS/App.css';
import { IoMdSearch } from "react-icons/io";
import logo from './algomaniac.png';
import sorting from'./images/sorting.png';
import FrontPage from './Pages/FrontPage/FrontPage';
import SortingPage from './Pages/Sorting/SortingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PathFindingPage from './Pages/PathFinding/PathFindingPage';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />}/>
        <Route path="/sorting" element={<SortingPage />} />
        <Route path="/pathfinding" element={<PathFindingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
