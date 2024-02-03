
import './App.css';
import React,{useState} from 'react';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Navbar from './Pages/Navbar';
import { Routes,Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  return (
   
    <div >
      {/*  */}
       <Navbar />
        <Routes>
        <Route path="/home" element={<Home  name="Abhishek"/>}/>
          <Route path="/blog" element={<Blog  count={count} setCount={setCount}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact  count={count}/>}/>

        </Routes>
    </div>
  );
}

export default App;
