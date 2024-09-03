import './App.css'
import Aboutme from './components/Aboutme/Aboutme'
 import Habilities from './components/Habilities/Habilities.jsx'; 
  import Projects from './components/Projects/Projects.jsx'; 
  import Contacts from './components/Contacts/Contacts.jsx'
 import Timeline from './components/Timeline/ExperienceApp.jsx' 
  import FloatButton from "./components/FloatButton/FloatButton.jsx"
  
function App() {

  return (
    
    <div className="App">

      <Aboutme />
      
      <Habilities />

      <Projects />

      <FloatButton className="FloatButon"  />
      
      <Timeline />

      

      <Contacts />

    </div>
    
  );
}

export default App
