
import Navbar from '../components/Navbar'


import LeftTopProfile from '../components/LeftTopProfile';
import LeftBottomRecent from "../components/LeftBottomRecent";
import Ad from "../components/Ad";
import Footer from "../components/Footer";


import Messaging from '../components/Messaging'
import News from '../components/News';

import Posts from '../components/Posts';
import {useState} from "react";




export default function Home() {

  const [msgOpen,setMsgOpen] = useState(true);
  
  return (
     
<div className="bg-gray-100">
   <header>
      <Navbar/>
   </header>
   
  
     <div className="flex justify-center md:mx-[1.5rem] lg:mx-[2rem] xl:mx-[20rem]">

      <div className="md:grid md:grid-rows-6 md:grid-flow-col md:gap-4"> 

        <div className="md:row-span-6 md:col-span-1 border-4 border-red-500">
          <div className=""><LeftTopProfile/></div>
          <div className="md:sticky md:top-[5rem] md:self-start"><LeftBottomRecent/></div>
        </div>

        <div className="md:cols-span-4 md:row-span-6"><Posts/></div> 

        <div className="md:row-span-6 md:col-span-1 border-4 border-red-500 hidden lg:block">
          <div className=""><News/></div> 
          <div className="md:sticky md:top-[5rem] md:self-start"><Ad/>
              <Footer/></div>
        </div> 
       
      </div>     
   </div>
  
    
   <Messaging
     msgOpen={msgOpen}
     setMsgOpen={setMsgOpen}
   />
  </div>
 
  );
}
