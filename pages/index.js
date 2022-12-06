
import Navbar from '../components/Navbar'


import LeftTopProfile from '../components/LeftTopProfile';

import Messaging from '../components/Messaging'
import News from '../components/News';



import StickyComponents from "../components/StickyComponents"
import Posts from '../components/Posts';






export default function Home() {

  
  return (
     
     <>
   <header>
      <Navbar/>
   </header>
  
   <div className="bg-gray-100">    
     <div>
       <div className="flex justify-between">
        <div><LeftTopProfile/></div>
        <div><News/></div>  
       </div>

       <div className="md:flex">
       <div className="self-start top-[5rem] md:sticky">
            <StickyComponents/>
       </div>  
       <div><Posts/></div>
       </div>
     </div>  
   </div> 
   
    
  
      
  
   <Messaging/>
   
      

   
     </>
  );
}
