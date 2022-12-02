import ImageProps from "./Props/ImageProps";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TuneIcon from '@mui/icons-material/Tune';

import SearchBar from "./Props/SearchBar";
import IconProps from "./Props/IconProps";




const MsgSearchBar = [
  {
      placeholder:"Search Messages",
      icon:[TuneIcon],
      inputClass:`bg-gray-200 pl-10 outline-none
           py-2 placeholder-gray-600 rounded-md text-sm`
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
  message:"Ok.Thanks",
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
  title:"Robin",
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
]


const MsgHeaderIcons = [
    
  {
      id:1,
      title:"Home",
      icon:<MoreHorizIcon/>,
      iconHref:"/",
      

  },
  {
      id:2,
      title:"My Network",
      icon:<OpenInNewIcon/>,
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
    title:"Luffy",
    imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
    ht:500,
    wd:500,
    text:`flex gap-3 px-3 justify-between`,
    classN:"h-[2.1rem] w-[2.1rem] rounded-full object-cover flex mr-2",
    
  }
]






const Messaging = () => {
    return (
      <div className="fixed right-0 top-[8rem] border space-y-4 p-4 shadow-sm
       shadow-black rounded-lg bg-white invisible md:visible">
        <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium flex items-center">
          {MsgProfileImg.map((img)=>(
             <ImageProps 
               src={img.imgSrc}
               ht={img.ht}
               wd={img.wd}
               className={img.classN}
             />
           ))}Messaging
        </h2>
        <div className="flex gap-2">
        {MsgHeaderIcons.map((item)=>(
          <div key={item.id}>
             <IconProps
                icon={item.icon}
             />
          </div>  
        ))}
        </div>
        </div>
         
        {MsgSearchBar.map((item)=>(
              <SearchBar
                 placeholder={item.placeholder}
                 inputClass={item.inputClass}
                 icon={item.icon}
              />
        ))}
        {MessageImages.map((item)=>(
          <div key={item.id}>
             
             <ImageProps
                src={item.imgSrc}
                title={item.title}
                titleClassN={item.titleClassN}
                ht={item.ht}
                wd={item.wd}
                msg={item.message}
                msgClassN={item.msgClassN}
                msgleft={item.msgleft}
                date={item.date}
                dateClassN={item.dateClassN}
                className={item.classN}
                text={item.text}
             />
          </div>  
        ))}
      </div>  
    );
}

export default Messaging;

