import {Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home.jsx'
function App() {
  return (

    <div>

   <Routes>
   <Route exact path="/" element={<Home />} /> {/* Render Home at root */}
</home>


   </Routes>
   </div>
  );
}

export default App;
