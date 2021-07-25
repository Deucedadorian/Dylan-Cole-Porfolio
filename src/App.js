// import logo from './logo.svg';
import './App.css';
import Jumbotron from "./components/jumbotron.js";
import MyWork from './components/myWork';
import AboutMe from './components/aboutMe';
import ContactMe from './components/contactMe';


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
