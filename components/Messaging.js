import ImageProps from "./Props/ImageProps";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TuneIcon from '@mui/icons-material/Tune';

import SearchBar from "./Props/SearchBar";
import IconProps from "./Props/IconProps";




const MsgSearchBar = [
  {   id:1,
      placeholder:"Search Messages",
      icon:[TuneIcon],
      inputClass:`bg-gray-200 pl-10 outline-none 
           py-2 placeholder-gray-600 rounded-md text-sm`,
      searchIconClass:"fixed px-2 pt-1",     
  }
]


const MessageImages= [

  {
  id:1,
  title:"Monkey.D.Luffy",
  imgSrc:`https://w0.peakpx.com/wallpaper/547/585/HD-wallpaper-monkey-d-luffy-one-piece.jpg`,
  iconHref:"/thomasmathew",
  classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
  icon:"",
  titleClassN:"text-[0.9rem]",
  msgClassN:"text-xs text-gray-600",
  msgleft:"flex gap-3",
  message:"You: So hows it going?",
  dateClassN:"text-xs text-violet-700",
  date:"Nov 29",
  ht:50,
  wd:50,
  text:`flex gap-3 px-3 justify-between`,
   
  },
  {
  id:2,
  title:"Roronoa Zoro",
  imgSrc:`https://w0.peakpx.com/wallpaper/937/618/HD-wallpaper-zoro-aesthetic-roronoa-zoro-green-icon-verde-one-piece-anime.jpg`,
  iconHref:"/thomasmathew",
  classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
  icon:"",
  titleClassN:"text-[0.9rem]",
  msgClassN:"text-xs text-gray-600",
  msgleft:"flex gap-3",
  message:"Sure. Anytime.",
  dateClassN:"text-xs text-violet-700",
  date:"Nov 27",
  ht:110,
  wd:110,
  text:`flex gap-3 px-3 justify-between`,
 
  },
  {
  id:3,
  title:"Vinsmoke Sanji",
  imgSrc:`https://w0.peakpx.com/wallpaper/201/626/HD-wallpaper-sanji-aesthetic-amarillo-icon-vinsmoke-sanji-yellow-one-piece-anime-thumbnail.jpg`,
  iconHref:"/thomasmathew",
  classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
  icon:"",
  titleClassN:"text-[0.9rem]",
  msgClassN:"text-xs text-gray-600",
  msgleft:"flex gap-3",
  message:"Just let me know.",
  dateClassN:"text-xs text-violet-700",
  date:"Nov 24",
  ht:60,
  wd:60,
  text:`flex gap-3 px-3 justify-between`,

  },
  {
  id:4,
  title:"Usopp",
  imgSrc:`https://w0.peakpx.com/wallpaper/70/620/HD-wallpaper-usoppe-robin-nami-one-piece-girubatto-zoro-sanji-anime-luffy-chopper.jpg`,
  iconHref:"/thomasmathew",
  classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
  icon:"",
  titleClassN:"text-[0.9rem]",
  msgClassN:"text-xs text-gray-600",
  msgleft:"flex gap-3",
  message:"Its Okay.",
  dateClassN:"text-xs text-violet-700",
  date:"Nov 22",
  ht:70,
  wd:70,
  text:`flex gap-3 px-3 justify-between`,

  },
  {
  id:5,
  title:"Nami",
  imgSrc:`https://w0.peakpx.com/wallpaper/774/852/HD-wallpaper-nami-anime-one-piece-manga.jpg`,
  iconHref:"/thomasmathew",
  classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
  icon:"",
  titleClassN:"text-[0.9rem]",
  msgClassN:"text-xs text-gray-600",
  msgleft:"flex gap-3",
  message:"Sure. Why not?",
  dateClassN:"text-xs text-violet-700",
  date:"Nov 21",
  ht:40,
  wd:40,
  text:`flex gap-3 px-3 justify-between`,

  },
  {
  id:6,
  title:"Nico Robin",
  imgSrc:`https://w0.peakpx.com/wallpaper/350/172/HD-wallpaper-nico-robin-icon-nico-robin-one-piece.jpg`,
  iconHref:"/thomasmathew",
  classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
  icon:"",
  titleClassN:"text-[0.9rem]",
  msgClassN:"text-xs text-gray-600",
  msgleft:"flex gap-3",
  message:"You: :)",
  dateClassN:"text-xs text-violet-700",
  date:"Nov 20",
  ht:500,
  wd:500,
  text:`flex gap-3 px-3 justify-between`,

  },
  {
    id:7,
    title:"Franky",
    imgSrc:`https://w0.peakpx.com/wallpaper/985/989/HD-wallpaper-franky-anime-one-piece.jpg`,
    iconHref:"/thomasmathew",
    classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
    icon:"",
    titleClassN:"text-[0.9rem]",
    msgClassN:"text-xs text-gray-600",
    msgleft:"flex gap-3",
    message:"That is so Superrr",
    dateClassN:"text-xs text-violet-700",
    date:"Nov 20",
    ht:120,
    wd:120,
    text:`flex gap-3 px-3 justify-between`,
  
  },
  {
      id:8,
      title:"Tony Tony Chopper",
      imgSrc:`https://w0.peakpx.com/wallpaper/950/449/HD-wallpaper-tony-tony-chopper-aesthetic-pink-icon-one-piece-anime-rosa.jpg`,
      iconHref:"/thomasmathew",
      classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
      icon:"",
      titleClassN:"text-[0.9rem]",
      msgClassN:"text-xs text-gray-600",
      msgleft:"flex gap-3",
      message:"You: :)",
      dateClassN:"text-xs text-violet-700",
      date:"Nov 18",
      ht:270,
      wd:270,
      text:`flex gap-3 px-3 justify-between`,
    
  },
  {
        id:9,
        title:"Brook",
        imgSrc:`https://api.duniagames.co.id/api/content/upload/file/3239901841635146421.jpg`,
        iconHref:"/thomasmathew",
        classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
        icon:"",
        titleClassN:"text-[0.9rem]",
        msgClassN:"text-xs text-gray-600",
        msgleft:"flex gap-3",
        message:"YOHOHOHO!",
        dateClassN:"text-xs text-violet-700",
        date:"Nov 17",
        ht:500,
        wd:500,
        text:`flex gap-3 px-3 justify-between`,
      
  },
  {
          id:10,
          title:"Jinbe",
          imgSrc:`https://w0.peakpx.com/wallpaper/857/367/HD-wallpaper-jinbe-s-current-wanted-poster-one-piece-character-bounty-poster-jinbei-bounty.jpg`,
          iconHref:"/thomasmathew",
          classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
          icon:"",
          titleClassN:"text-[0.9rem]",
          msgClassN:"text-xs text-gray-600",
          msgleft:"flex gap-3",
          message:"You: Yes. I understand. :)",
          dateClassN:"text-xs text-violet-700",
          date:"Nov 15",
          ht:500,
          wd:500,
          text:`flex gap-3 px-3 justify-between`,
        
  },
  {
    id:11,
    title:"Yamato",
    imgSrc:`https://w0.peakpx.com/wallpaper/240/123/HD-wallpaper-yamato-anime-one-piece-manga.jpg`,
    iconHref:"/thomasmathew",
    classN:"h-[3rem] w-[3rem] rounded-full object-cover flex",
    icon:"",
    titleClassN:"text-[0.9rem]",
    msgClassN:"text-xs text-gray-600",
    msgleft:"flex gap-3",
    message:"You: You ready?",
    dateClassN:"text-xs text-violet-700",
    date:"Nov 15",
    ht:100,
    wd:100,
    text:`flex gap-3 px-3 justify-between`,
  
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
      icon:<KeyboardArrowDownIcon/>,
      iconHref:"/jobs",
  },
]


const MsgProfileImg = [
  {
    id:1,
    title:"Luffy",
    imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
    ht:500,
    wd:500,
    text:`flex gap-3 px-3 justify-between`,
    classN:"h-[2.1rem] w-[2.1rem] rounded-full object-cover flex mr-2",
    
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
             <ImageProps 
               src={imgz.imgSrc}
               ht={imgz.ht}
               wd={imgz.wd}
               classN={imgz.classN}
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
             <IconProps
                icon={iconz.icon}
             />
            </button> 
          </div>  
        ))}
        </div>
        </div>

        
         
        {MsgSearchBar.map((searchh)=>(
            <div key={searchh.id}>
              <SearchBar
                 placeholder={searchh.placeholder}
                 inputClass={searchh.inputClass}
                 icon={searchh.icon}
                 searchIconClass={searchh.searchIconClass}
              />
            </div>  
        ))}


      
        <div className="absolute bg-white z-20 w-[19rem]
          bottom-0 overflow-y-auto top-[8rem]">
        {MessageImages.map((imagez)=>(
          <div key={imagez.id}>
             
             <ImageProps
                src={imagez.imgSrc}
                title={imagez.title}
                titleClassN={imagez.titleClassN}
                ht={imagez.ht}
                wd={imagez.wd}
                msg={imagez.message}
                msgClassN={imagez.msgClassN}
                msgleft={imagez.msgleft}
                date={imagez.date}
                dateClassN={imagez.dateClassN}
                classN={imagez.classN}
                text={imagez.text}
             />
             <hr className="my-4"/>
          </div>  
        ))}
        </div>
        </div>
      
    
    );
}

export default Messaging;

