import logo from './logo.svg';
import './App.css';
import Home from './Component/Home.jsx'
function App() {
  return (

    <div>

   <Routes>
   <Route exact path="/" element={<Home />} /> {/* Render Home at root */}



   </Routes>
   </div>
  );
}

export default App;
