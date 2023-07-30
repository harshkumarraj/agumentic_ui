import './App.css';
import Components from './components/Component/Components';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Components/>
    </div>
  );
}

export default App;
