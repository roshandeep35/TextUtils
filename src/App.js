import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
function App() {
  return (
  <>

    <Navbar title="Text Utils " aboutText="About"/>
    
    <div className="container">
       <TextForm title="Text for analysing"/>
    </div>
    <div>
      <Greet/>
      <Welcome/>
      </div>
  </>
  );
}

export default App;
