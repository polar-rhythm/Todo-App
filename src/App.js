import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';


function App() {
    return (
    <div className="App">
        
      <div>
        <div className="container">
        <Navbar/>
        </div>
        <div className="content">
          <Home/>
          <Create/>
          </div>
      </div>
    </div>
  );
}

export default App;
