import {Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home.jsx'
function App() {
  return (

    <div>
<Router>
   <Routes>
   <Route exact path="/" element={<Home />} /> {/* Render Home at root */}


   </Routes>
   </Router>
   </div>
  );
}

export default App;
