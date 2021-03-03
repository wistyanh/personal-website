import './App.css';
import HomePage from './pages/HomePage';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

/* Improvements
1. make pictures scalable
2. add a quick social bar at the bottom of me1
3. navbar (functional and hovering and style)
4. change proj tab to a horizontally scrollable one
5. add avp intials on the top left
6. how to add components
*/

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Experiences/>
      <Projects/>
      <Contact/>
    </div>
    
  );
}

export default App;
