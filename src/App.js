import './App.css';
import SideBar from './components/SideMenu';
import ListProduct from './components/List'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OptimizePage from './components/Pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<SideBar />}/>
          <Route path="producto" element={<ListProduct />}/>
          <Route path="optimized" element={<OptimizePage />}/>
          <Route path="*" element={<SideBar />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
