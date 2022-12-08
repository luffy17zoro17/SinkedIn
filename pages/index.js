
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






const CreateAPost = [
  {
    id:1,
    title:"Create a post",
    imgSrc:"https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg",
    icon:[
      {
        id:1,
        position:"top",
        zeroClass:"font-semibold text-sm",
        icon:[<PublicIcon className="p-1"/>,<KeyboardArrowDownIcon/>],
      },
      {
        id:2,
        position:"middle",
        oneClass:"text-green-500 font-semibold",
        icon:[<TagFacesIcon/>],

      },
      {
         id:3,
         position:"bottomL",
         twoClass:"",
         icon:[
           <PhotoSizeSelectActualIcon/>,
           <YouTubeIcon/>,
           <ArticleIcon/>,
           <BusinessCenterIcon/>,
           <CelebrationIcon/>,
           <PollIcon/>,
           <MoreHorizIcon/>
        ],
      },
      {
         id:4,
         position:"bottomR",
         threeClass:"text-sm font-semibold",
         icon:[<ChatBubbleIcon/>],
      }

    ]
  }

]









export default function Home() {

  const [msgOpen,setMsgOpen] = useState(true);
  const [postOpen,setPostOpen] = useState(false);
  
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

        <div className="md:cols-span-4 md:row-span-6">
          {CreateAPost.map((postt)=>(
            <div key={postt.id}>
               <Posts
                postOpen={postOpen}
                setPostOpen={setPostOpen}
                imgSrc={postt.imgSrc}
                icon={postt.icon}
                zeroClass={postt.icon[0].zeroClass}
                oneClass={postt.icon[1].oneClass}
                threeClass={postt.icon[3].threeClass}
               />
            </div>  
          ))}
          
        </div> 

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
