import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch,Route  } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';

import Home from './components/Home/Home';
import MyProjects from './components/MyProjects/MyProjects';
import Navbars from './components/Navbars/Navbars';

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
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
