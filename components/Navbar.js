



import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AppsIcon from '@mui/icons-material/Apps';
import NextWeekIcon from '@mui/icons-material/NextWeek';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchBar from "./Props/SearchBar";
import ImageProps from "./Props/ImageProps";
import IconProps from "./Props/IconProps";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';






const SearchBarItem = [
    {
        id:1,
        placeholder:"Search",
        icons:[""],
        inputClass:`bg-gray-200 pl-9 outline-none top-[0.6rem] 
          shadow-inner shadow-gray-400
              left-[4rem]
             py-2 placeholder-gray-600 rounded-md text-sm hidden lg:flex`,
        title:"Search",
        titleClass:`shadow shadow-gray-300 px-1 text-xs font-light hidden md:flex lg:hidden`,  
        searchIconClass:"lg:fixed lg:z-30 lg:top-3 lg:px-2 lg:pt-1",
        topClass:"flex flex-col items-center justify-center text-center z-30",  
    }
]


const NavbarImages= [
    {
        id:1,
        title:"",
        imgSrc:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/IN_domain.svg/640px-IN_domain.svg.png`,
        iconHref:"/",
        classN:`rounded-full h-[2.8rem] w-[2.8rem] object-cover fixed border-4
          border-cyan-400 shadow shadow-black
         top-1 left-3 sm:left-4 xl:left-[5rem]`,
        icon:"",
        msgleft:"",
        titleClassN:"",
        ht:500,
        wd:500,
        text:"",
      

    },
    {
        id:2,
        title:"Me",
        imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
        iconHref:"/thomasmathew",
        classN:"h-[1.4rem] w-[1.4rem] rounded-full object-cover",
        icon:<KeyboardArrowDownIcon/>,
        msgleft:`flex flex-col items-center mt-[0.8rem]
         md:mt-[0.2rem]`,
        titleClassN:"flex items-center shadow px-1 shadow-gray-300 hidden md:flex",
        ht:500,
        wd:500,
        text:`font-light text-xs absolute
         justify-center flex left-[62%]
         top-1 lg:pl-[8rem]`,
    },
]




const NavbarIcons = [
    
    {
        id:1,
        title:"Home",
        icon:[<HomeIcon/>],
        iconHref:"/",
        classN:"",
        text:"text-center font-light text-xs",
        horiz:"",
        iconStyle:"",
        textStyle:"shadow rounded-xl px-1 shadow-gray-200 hidden md:flex"

     
 
    },
    {
        id:2,
        title:"My Network",
        icon:[<PeopleIcon/>],
        iconHref:"/mynetwork",
        classN:"",
        text:"text-center font-light text-xs",
        horiz:"",
        iconStyle:"",
        textStyle:"shadow rounded-xl px-1 shadow-gray-200 hidden md:flex"

    },
    {
        id:3,
        title:"Jobs",
        icon:[<WorkIcon/>],
        iconHref:"/jobs",
        classN:"",
        text:"text-center font-light text-xs",
        horiz:"",
        iconStyle:"",
        textStyle:"shadow rounded-xl px-1 shadow-gray-200 hidden md:flex",

    },
    {
        id:4,
        title:"Messaging",
        icon:[<MessageIcon/>],
        iconHref:"/messaging",
        classN:"",
        text:"text-center font-light text-xs",
        horiz:"",
        iconStyle:"",
        textStyle:"shadow rounded-xl px-1 shadow-gray-200 hidden md:flex",
    },
    {
        id:5,
        title:"Notifications",
        icon:<CircleNotificationsIcon/>,
        iconHref:"/notifications",
        classN:"",
        text:"text-center font-light text-xs",
        horiz:"invisible lg:visible",
        iconStyle:"",
        textStyle:"shadow rounded-xl px-1 shadow-gray-200 hidden lg:flex",

    },
 
    {
        id:6,
        title:"Work",
        icon:[<AppsIcon/>,<KeyboardArrowDownIcon/>],
        iconHref:"/Work",
        classN:"",
        text:"text-center font-light text-xs pl-[6vw] pt-[0.4rem]",
        horiz:"flex flex-col items-center",
        iconStyle:"hidden sm:flex",
        textStyle:"shadow px-1 shadow-gray-300 flex items-center hidden md:flex",

    },
    {
        id:7,
        title:"Post a job for free",
        icon:<NextWeekIcon/>,
        iconHref:"/postajob",
        classN:"",
        text:"text-center font-light text-xs",
        horiz:"flex flex-col items-center",
        iconStyle:"hidden sm:flex",
        textStyle:"shadow rounded-xl px-1 shadow-gray-200 hidden md:flex",
    }
]








const Navbar = () => {

    
    return (
        <>
        <div className="flex items-center border z-30 shadow shadow-black 
        justify-center fixed top-0 bg-white h-[3.5rem] w-full
         space-x-[3%] px-3">

         
        {NavbarImages.map((img)=>(          
          <div key={img.id}>          
            <ImageProps
               classN={img.classN}
               id={img.id}
               ht={img.ht}
               wd={img.wd}
               msgleft={img.msgleft}
               titleClassN={img.titleClassN}
               icon={img.icon}
               text={img.text}
               title={img.title}
               src={img.imgSrc}  
          
            />     
          </div>
        ))}
    
        {SearchBarItem.map((srch) => (
          <div key={srch.id}>
           <SearchBar
             placeholder={srch.placeholder}
             icon={srch.icons}
             inputClass={srch.inputClass}
             title={srch.title}
             titleClass={srch.titleClass}
             searchIconClass={srch.searchIconClass}
           /> 
          </div> 
        ))}
        
          
        {NavbarIcons.map((ico)=>(
          <div key={ico.id}>          
            <IconProps
               id={ico.id}
               title={ico.id===6 ? [ico.title,ico.icon[1]] : ico.title}
               icon={(ico.id===6) ? (ico.icon[0]) : (ico.icon)}
               href={ico.iconHref}
               text={ico.text}
               textStyle={ico.textStyle}
               horiz={ico.horiz}
               classN={ico.id===6 ? ico.classN : ""}
               iconStyle={ico.iconStyle}
               topClass={ico.topClass}
            />        
          </div>  
        ))}  
        
        <div className="sm:hidden"><MoreHorizIcon/></div>      
        </div>
        
        </>
    

    );
}

export default Navbar;