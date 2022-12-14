import Navbar from '../components/Navbar'

import LeftTopProfile from '../components/LeftTopProfile';
import LeftBottomRecent from "../components/LeftBottomRecent";
import Ad from "../components/Ad";
import Footer from "../components/Footer";

import Messaging from '../components/Messaging'
import News from '../components/News';

import Posts from '../components/Posts';
import {useState} from "react";

import PublicIcon from '@mui/icons-material/Public';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TagFacesIcon from '@mui/icons-material/TagFaces';



import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PollIcon from '@mui/icons-material/Poll';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';









const CreateAPost = [
  {
    id:1,
    title:"Create a post",
    imgSrc:"https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg",
    icon:[{cp:'j', value:<PublicIcon className="p-1"/>},
          {cp:'k', value:<KeyboardArrowDownIcon/>},
          {cp:'l',value:<TagFacesIcon/>},
          {cp:'m', value:<PhotoSizeSelectActualIcon/>},
           {cp:'n',value:<YouTubeIcon/>},
           {cp:'o', value:<ArticleIcon/>},
           {cp:'p',value:<BusinessCenterIcon/>},
           {cp:'q',value:<CelebrationIcon/>},
           {cp:'r', value:<PollIcon/>},
           {cp:'s', value:<MoreHorizIcon/>},
           {cp:'t',value:<ChatBubbleIcon className="p-1 my-1 mx-[0.3rem]"/>},
           {cp:'u',value:<DisabledByDefaultIcon className="text-2xl"/>}
         ],
    zeroClass:"font-semibold text-sm",
    oneClass:"text-green-500 font-semibold",
    twoClass:"",
    threeClass:"text-sm font-semibold",
    fourClass:"",
}
]









export default function Home() {

  const [msgOpen,setMsgOpen] = useState(true);
  const [postOpen,setPostOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);
 
  
  return (
     
<div className={postOpen ? "fixed" : "bg-red-100"}>
    
   <header>
      <Navbar/>
   </header>
   
  
    <div className="flex justify-center md:mx-[2rem] xl:mx-[15rem]">

      <div className="md:grid md:grid-rows-8 md:grid-flow-col md:gap-4"> 

        <div className="md:row-span-6 md:col-span-1 md:w-[13rem] xl:w-[15rem]">
          <div className=""><LeftTopProfile/></div>
          <div className="md:sticky md:top-[5rem] md:self-start">
              <LeftBottomRecent/>
          </div>
        </div>

        <div className="md:cols-span-4 md:row-span-6 md:w-[30rem] lg:w-[28rem] xl:w-[36rem]">
          {CreateAPost.map((postt)=>(
            <div key={postt.id}>
               <Posts
                postOpen={postOpen}
                setPostOpen={setPostOpen}
                imgSrc={postt.imgSrc}
                icon={postt.icon.map((iconn,index)=>(<span key={index}>{iconn.value}</span>))}
                zeroClass={postt.zeroClass}
                oneClass={postt.oneClass}
                threeClass={postt.threeClass}
                isClose={isClose}
                setIsClose={setIsClose}
               />
            </div> 
          ))}
        <div className='sm:mx-[4rem] md:mx-0 md:pb-[5rem] lg:hidden'>
            <Footer/> 
        </div>  
        </div> 
        

        <div className="md:row-span-6 md:col-span-3
          hidden lg:block lg:w-[17rem] xl:w-[21rem]">
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