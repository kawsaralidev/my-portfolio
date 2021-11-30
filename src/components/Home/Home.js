import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';


const Home = () => {
    return (
       <div>
           <Banner></Banner>
           <MyProjects></MyProjects>
          
           <Contact></Contact>
       </div>
    );
};

export default Home;