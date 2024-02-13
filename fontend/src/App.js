// import React,{Component} from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/pages/Header";
// import Home from "./components/pages/Home";
// import Blog from "./components/pages/Blog";
// import Contact from './components/pages/Contact';
// import Singn from './components/pages/Singn';
// import Template from './components/pages/Template';
// import Footer from "./components/pages/Footer";
// import Singnup from "./components/pages/Singnup";
// import Basicinfo from './components/pages/Standard/Basicinfo';
// import Education from './components/pages/Standard/Education';
// import Experiences from './components/pages/Standard/Experiences';
// import Refrences from './components/pages/Standard/Refrences';
// import Languages from './components/pages/Standard/Languages';
// import Interests from './components/pages/Standard/Interests';
// import Expertise from './components/pages/Standard/Expertise';
// import Download from './components/pages/Standard/Download';
// import Certification from './components/pages/Standard/Certification';
// import Accomplishments from './components/pages/Standard/Accomplishments';
// export default class App extends Component{
//   render = ()=>{
//     return(
//       <React.Fragment>
//         <BrowserRouter>
//         <Header/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/contact" element={<Contact/>}/> 
//           <Route path="/blog" element={<Blog/>}/> 
//           <Route path="/template" element={<Template/>}/> 
//           <Route path="/singn" element={<Singn/>}/> 
//           <Route path="/singnup" element={<Singnup/>}/> 
//           <Route path="/basicinfo" element={<Basicinfo/>}/> 
//           <Route path="/education" element={<Education/>}/> 
//           <Route path="/experiences" element={<Experiences/>}/> 
//           <Route path="/refrences" element={<Refrences/>}/> 
//           <Route path="/languages" element={<Languages/>}/> 
//           <Route path="/interests" element={<Interests/>}/> 
//           <Route path="/expertise" element={<Expertise/>}/> 
//           <Route path="/download" element={<Download/>}/> 
//           <Route path="/certification" element={<Certification/>}/> 
//           <Route path="/achievements" element={<Accomplishments/>}/> 
//           </Routes>
//           <Footer/>
//           </BrowserRouter>
//       </React.Fragment>
//     )
//   }


// }





import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Contact from './components/pages/Contact';
import Singn from './components/pages/Singn';
import Template from './components/pages/Template';
import Footer from "./components/pages/Footer";
import Singnup from "./components/pages/Singnup";
import Basicinfo from './components/pages/Standard/Basicinfo';
import Education from './components/pages/Standard/Education';
import Experiences from './components/pages/Standard/Experiences';
import Refrences from './components/pages/Standard/Refrences';
import Languages from './components/pages/Standard/Languages';
import Interests from './components/pages/Standard/Interests';
import Expertise from './components/pages/Standard/Expertise';
import Download from './components/pages/Standard/Download';
import Certification from './components/pages/Standard/Certification';
import Accomplishments from './components/pages/Standard/Accomplishments';
import Private from "./components/pages/Private";
import Logout from "./components/pages/Logout";

const App = () => {
  let auth = localStorage.getItem('user')
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route element={<Private/>}>
        <Route path="/template" element={<Template />} /> 
        </Route>

          {auth ? 
          <Route path="Logout" element={<Logout />} /> :
            <>
            <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
            <Route path="/singn" element={<Singn />} />
          <Route path="/singnup" element={<Singnup />} />
          <Route path="/basicinfo" element={<Basicinfo />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/refrences" element={<Refrences />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/download" element={<Download />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/achievements" element={<Accomplishments />} /> 
            </>

          }
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
