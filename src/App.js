import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch,Route  } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';



import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Healthcare from './components/Healthcare/Healthcare';
import Home from './components/Home/Home';
import MyProjects from './components/MyProjects/MyProjects';
import Navbars from './components/Navbars/Navbars';
import Niche from './components/Niche/Niche';
import Technology from './components/Technology/Technology';

import Tourism from './components/Tourism/Tourism';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbars></Navbars>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/myprojects">
           <MyProjects></MyProjects>
         </Route>
         <Route path="/contact">
           <Contact></Contact>
         </Route>
         <Route path="/niche">
           <Niche></Niche>
         </Route>
         <Route path="/tourism">
           <Tourism></Tourism>
         </Route>
        
         <Route path="/aboutme">
           <AboutMe></AboutMe>
         </Route>
         <Route path="/healthcare">
           <Healthcare></Healthcare>
         </Route>
         <Route path="/blog">
           <Blogs></Blogs>
         </Route>
         <Route path="/technology">
           <Technology></Technology>
         </Route>
         
       </Switch>
       <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
