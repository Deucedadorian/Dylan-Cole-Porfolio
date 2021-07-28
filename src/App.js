import './App.css';
import Jumbotron from "./components/jumbotron.js";
import MyWork from './components/myWork.js';
import AboutMe from './components/aboutMe.js';
import ContactMe from './components/contactMe.js';



function App() {
  return (
    <div>
      <Jumbotron />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </div>
  );
}

export default App;
