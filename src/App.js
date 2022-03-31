import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from './components/Footerfiles/Footer';
// import Home from './components/pages/Home'
// import Company from './components/Company'
// import Executive from './components/Executive'
// import Contact from './components/Contact'
// import Team2 from './components/Team2'
// import Mentors from './components/Mentors'
// import Blog from './components/pages/Blog'
import Apply from './components/Apply'
import Flutterwave from './components/Flutterwave'

function App() {
  return (
 <Router>
    <Apply/>
<Routes>
<Route path="/flutterwave" element={ <Flutterwave/> } /> 
</Routes>
    </Router>
  );
}

export default App;
