
import Navbar from '../components/Navbar'


import LeftTopProfile from '../components/LeftTopProfile';

import Messaging from '../components/Messaging'
import News from '../components/News';

import PostHeader from '../components/PostHeader';
import PostList from '../components/PostList';

import StickyComponents from "../components/StickyComponents"






export default function Home() {

  
  return (
     
     <>
   <header>
      <Navbar/>
   </header>
  
   <div className="bg-gray-100 px-[0vw] lg:px-[3vw]">    
     <div>
       <div className="flex justify-between">
        <div><LeftTopProfile/></div>
        <div><News/></div>  
       </div>

   
       <div className="top-[5rem] md:sticky">
            <StickyComponents/>
       </div>  
       
       <div><PostHeader/></div>   
       <div><PostList/></div>
     </div>  
   </div> 
   
    
  
      
  
   <Messaging/>
   
      

   
     </>
  );
}
