import ImageProp from "./Props/ImageProp";


import SearchIcon from '@mui/icons-material/Search';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TuneIcon from '@mui/icons-material/Tune';


import IconProp from "./Props/IconProp";
import SearchInputProp from "./Props/SearchInputProp";
import TitleProps from "./Props/TitleProp";







const MsgSearchBar = [
  {   id:1,
      placeholderr:"Search Messages",
      icon:[<SearchIcon className="z-10 absolute mt-[0.4rem] ml-4"/>,
           <TuneIcon className="z-10 absolute mt-1 ml-[14rem]"/>,],
      iconClass:"",
      inputClass:`bg-gray-200 outline-none w-full
           py-2 pl-9 placeholder-gray-600 rounded-md text-sm`,
      searchClass:`px-2 relative`,     
  }
]





const MessageContent= [

  {
  id:1,
  title:[
    "Luffy"
  ],
  
  imgClass:`h-[3rem] w-[3rem] rounded-full object-cover`,
  hoverClass:`h-[3rem] w-[3rem] rounded-full object-cover border-4`,
  iHt:70,
  iWd:70,
 
  msgClassN:"text-xs text-gray-600",
  msgleft:"flex gap-3",
  detail:[
     "You: So hows it going?",
     
  ],
  detailClass:"text-[0.8rem] font-light",
  dateClassN:["text-xs text-violet-700"],
  date:"Nov 29",
  text:`flex gap-3 px-3 justify-between`,
      
  imgSrc:`https://w0.peakpx.com/wallpaper/406/424/HD-wallpaper-luffy-anime-one-piece-smile.jpg`,
  

  },
  {
    id:2,
    title:"Roronoa Zoro",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    hoverClass:`h-[3rem] w-[3rem] rounded-full object-cover border-4`,
    iHt:70,
    iWd:70,
    msgClassN:"",
    msgLeft:"",
    detail:"Sure. Anytime.",
    detailClass:"text-[0.8rem] font-light",
    dateClassN:[""],
    date:"Nov 27",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/937/618/HD-wallpaper-zoro-aesthetic-roronoa-zoro-green-icon-verde-one-piece-anime.jpg`,
   
  },
  {
    id:3,
    title:"Vinsmoke Sanji",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    hoverClass:`h-[3rem] w-[3rem] rounded-full object-cover border-4`,
    iHt:80,
    iWd:80,
    msgClassN:"",
    msgLeft:"",
    detail:"Just let me know.",
    detailClass:"text-[0.8rem] font-light",
    dateClassN:[""],
    date:"Nov 24",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/201/626/HD-wallpaper-sanji-aesthetic-amarillo-icon-vinsmoke-sanji-yellow-one-piece-anime.jpg`,
  },
  {
    id:4,
    title:"Usopp",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    iHt:70,
    iWd:70,
    msgClassN:"",
    msgLeft:"",
    detail:"You: Roger that. :D",
    detailClass:"text-[0.8rem] font-light",
    dateClassN:[""],
    date:"Nov 22",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/766/581/HD-wallpaper-usopp-organ-god-usopp-art-pirate-one-piece-anime-sogeking-straw-hat-pirates-thumbnail.jpg`,
  },
  {
    id:5,
    title:"Nami",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    iHt:80,
    iWd:80,
    msgClassN:"",
    msgLeft:"",
    detail:"You: So hows the weather today?",
    detailClass:"text-[0.8rem] font-light w-[10rem]",
    dateClassN:[""],
    date:"Nov 21",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/774/852/HD-wallpaper-nami-anime-one-piece-manga.jpg`,
  },
  {
    id:6,
    title:"Nico Robin",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    iHt:70,
    iWd:70,
    msgClassN:"",
    msgLeft:"",
    detail:"You: :)",
    detailClass:"text-[0.8rem] font-light",
    dateClassN:"",
    date:"Nov 20",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/350/172/HD-wallpaper-nico-robin-icon-nico-robin-one-piece.jpg`,
  },
  {
    id:7,
    title:"Franky",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    iHt:80,
    iWd:80,
    msgClassN:"",
    msgLeft:"",
    detail:"That is so Superrr",
    detailClass:"text-[0.8rem] font-light",
    dateClassN:[""],
    date:"Nov 20",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/813/568/HD-wallpaper-franky-robin-nami-one-piece-usoppe-girubatto-zoro-sanji-anime-luffy-chopper.jpg`,
  },
  {
    id:8,
    title:"Tony Tony Chopper",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    iHt:70,
    iWd:70,
    msgClassN:"",
    msgLeft:"",
    detail:"You: Yes. I understand. :)",
    detailClass:"text-[0.8rem] font-light",
    dateClassN:[""],
    date:"Nov 18",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/949/4/HD-wallpaper-tony-tony-chopper-chopper-one-piece.jpg`,
  },
  {
    id:9,
    title:"Brook",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    iHt:100,
    iWd:100,
    msgClassN:"",
    msgLeft:"",
    detail:"YOHOHOHO!",
    detailClass:"text-[0.8rem] font-light",
    dateClassN:"",
    date:"Nov 17", 
    text:"",
    imgSrc:`https://api.duniagames.co.id/api/content/upload/file/3239901841635146421.jpg`
  },
  {
    id:10,
    title:"Jinbe",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    iHt:70,
    iWd:70,
    msgClassN:"",
    msgLeft:"",
    detail:"Sure. Why not?",
    detailClass:"text-[0.8rem] font-light",
    dateClassN:[""],
    date:"Nov 15",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/857/367/HD-wallpaper-jinbe-s-current-wanted-poster-one-piece-character-bounty-poster-jinbei-bounty.jpg`
  },
  {
    id:11,
    title:"Yamato",
    imgClass:"h-[3rem] w-[3rem] rounded-full object-cover",
    iHt:70,
    iWd:70,
    msgClassN:"",
    msgLeft:"",
    detail:["You: You ready?"],
    detailClass:"text-[0.8rem] font-light",
    dateClassN:[""],
    date:"Nov 15",
    text:"",
    imgSrc:`https://w0.peakpx.com/wallpaper/588/320/HD-wallpaper-yamato-anime-one-piece-manga.jpg`
  },


 
]





const MsgHeaderIcons = [
    
  {
      id:1,
      title:"Home",
      icon:<MoreHorizIcon className="text-gray-400"/>,
      iconHref:"/",
      

  },
  {
      id:2,
      title:"My Network",
      icon:<OpenInNewIcon className="text-gray-400"/>,
      iconHref:"/mynetwork",
  },
  {
      id:3,
      title:"Jobs",
      icon:<KeyboardArrowDownIcon className="hover:bg-green-200 rounded"/>,
      iconHref:"/jobs",
  },
]


const MsgProfileImg = [
  {
    id:1,
    title:"Luffy",
    imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
    iHt:500,
    iWd:500,
    text:`flex gap-3 px-3 justify-between`,
    imgClass:"h-[2.1rem] w-[2.1rem] rounded-full object-cover flex mr-2",
    
  }
]






const Messaging = ({msgOpen, setMsgOpen}) => {
    return (
      
      <div className={msgOpen === true ? (`w-[20rem] right-0 z-40 top-[19vh]
        space-y-4 p-4 shadow-lg fixed bottom-0
       shadow-black rounded-lg bg-white hidden md:block`) : 
         (`bottom-0 fixed right-0 h-[4rem] shadow-lg shadow-black w-[20rem]
            p-3 rounded-t-lg bg-white space-y-4 hidden md:block`)}>

        <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium flex items-center">
          {MsgProfileImg.map((imgz)=>(
            <div key={imgz.id}>
               <ImageProp
                  imgSrc={imgz.imgSrc}
                  iHt={imgz.iHt}
                  iWd={imgz.iWd}
                  imgClass={imgz.imgClass}
                />          
            </div>  
           ))}Messaging
        </h2>
        <div className="flex gap-2">
        {MsgHeaderIcons.map((iconz)=>(
          <div key={iconz.id}>
            <button 
              onClick={iconz.id===3 ? (()=>setMsgOpen(!msgOpen)) : null}
              disabled={iconz.id!==3}
            > 
             <IconProp
                icon={iconz.icon}
             />
            </button> 
          </div>  
        ))}
        </div>
        </div>

        
         
        {MsgSearchBar.map((searchh)=>(
            <div key={searchh.id}>
            
               <div className=""> 
               <IconProp
                 icon={searchh.icon.map((item,index)=>(<div key={index}>{item}</div>))}
                 iconClass={searchh.iconClass}
               />
               <SearchInputProp
                  placeholderr={searchh.placeholderr}
                  inputClass={searchh.inputClass}
                  searchClass={searchh.searchClass}
               />
               </div>
                
            </div>  
        ))}


      
        <div className="absolute bg-white z-20 w-[19rem]
          bottom-0 overflow-y-auto top-[8rem]">
        {MessageContent?.map((item)=>(
          <div key={item?.id} className="hover:bg-red-100 
          hover:rounded-tl-3xl">
            <div className="flex justify-between">
            <div className="flex gap-4">    
             <ImageProp
                imgSrc={item.imgSrc}
                iHt={item.iHt}
                iWd={item.iWd}
                imgClass={item.imgClass}    
             />   
             <TitleProps
               title={item.title}
               detail={item.detail}
               detailClass={item.detailClass}
             />

            
            </div>
            <div className="text-xs text-purple-600 pr-3">
              {item.date}
            </div>  
            </div>
            <hr className="border-x-[0.1rem] my-4 
            border-green-200 w-full"/>
          </div>  
          ))}
        </div>
        </div>
      
    
    );
}

export default Messaging;