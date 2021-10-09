import ONavbar from './Components/ONavbar';
import OHome from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
    <ONavbar />
    <OHome />
   </div>
  );
}

export default App;
