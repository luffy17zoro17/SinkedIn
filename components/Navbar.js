import SearchIcon from '@mui/icons-material/Search';

import Image from "next/image";

import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AppsIcon from '@mui/icons-material/Apps';
import NextWeekIcon from '@mui/icons-material/NextWeek';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ImageProp from "./Props/ImageProp";
import IconProp from "./Props/IconProp";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchInputProp from './Props/SearchInputProp';
import TitleProps from './Props/TitleProp';






const SearchBarItem = [
    {
        id:1,
        placeholderr:"Search",
        icon:<SearchIcon className="p-[0.1rem] shadow
        rounded-full shadow-black"/>,
        title:"Search",
        inputClass:`bg-gray-200 outline-none p-2 placeholder-green-600 
         hover:shadow-inner hover:shadow-green-300 ml-9
          pl-11 text-sm rounded-t-md hidden lg:block lg:w-[14rem]`,
        iconClass:"absolute pl-6 lg:ml-[1.4rem]"

          
    }
]


const NavbarLogo= [
    {
        id:1,
        imgSrc:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/IN_domain.svg/640px-IN_domain.svg.png`,
        imgClass:`rounded-full h-[2.8rem] w-[2.8rem] object-cover border-4
          border-green-400 shadow shadow-black fixed top-1 left-2 mx-3 xl:static`,
        iHt:50,
        iWd:50,
    },
]




const NavbarList = [
    
    {
        id:1,
        title:[{nid:'c',value:"Home"}],
        titleClass:"px-1 rounded-xl shadow-gray-300 shadow hidden lg:block",
        icon:<HomeIcon/>,  
        iconClass:""
    },
   {
        id:2,
        title:[{nid:'c',value:"My Network"}],
        titleClass:"px-1 rounded-xl shadow-gray-300 shadow hidden lg:block",
        icon:<PeopleIcon/>,
        iconClass:"",
    },
    {
        id:3,
        title:[{nid:'c',value:"Jobs"}],
        titleClass:"px-1 rounded-xl shadow-gray-300 shadow hidden lg:block",
        icon:<WorkIcon/>,
        iconClass:"",
    },
    {
        id:4,
        title:[{nid:'c',value:"Messaging"}],
        titleClass:"px-1 rounded-xl shadow-gray-300 shadow hidden lg:block",
        icon: <MessageIcon/>,
        iconClass:""
    },
    {
        id:5,
        title:[{nid:'c',value:"Notifications"}],
        titleClass:"px-1 rounded-xl shadow-gray-300 shadow hidden lg:block",
        icon: <CircleNotificationsIcon/>,
        iconClass:""
    },
    {   
        id:6,
        title:[{nid:'c',value:"Me"},{nid:'d',value:<KeyboardArrowDownIcon/>}],
        titleClass:"px-1 rounded-xl shadow-gray-300 shadow mt-[0.1rem] hidden lg:block",
        icon:<Image src="https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg"
                   alt="" className="object-cover rounded-full h-[1.4rem] w-[1.4rem]" 
                   height={50} width={50}/>,
        iconClass:"",           
    },
    {
        id:7,
        title:[{nid:'c',value:"Work"},{nid:'d',value:<KeyboardArrowDownIcon/>}],
        titleClass:"px-1 rounded-xl shadow-gray-300 shadow hidden lg:block",
        icon:<AppsIcon className="hidden md:block"/>,
        iconClass:""

    },
    {
        id:8,
        title:[{nid:'c',value:"Post a job for free"}],
        titleClass:"px-1 rounded-xl shadow-gray-300 shadow hidden lg:block",
        icon:<NextWeekIcon className="hidden md:block"/>,
        iconClass:""
     
    },
    {
        id:9,
        title:[{nid:'',value:""}],
        titleClass:"hidden lg:block",
        icon:<MoreHorizIcon className="md:hidden"/>,
        iconClass:"" 
    }

] 








const Navbar = () => {

    
    return (
        
        <div className="flex z-30 shadow shadow-black 
        justify-around hover:shadow-green-700
        items-center fixed bg-white h-[3.5rem] w-full
         px-3 xl:justify-center xl:gap-[8rem]">
            
        <div className="flex gap-3">   
        {NavbarLogo.map((img)=>(          
          <div key={img.id} className="cursor-pointer">          
            <ImageProp
                imgSrc={img.imgSrc}
                iHt={img.iHt}
                iWd={img.iWd}
                imgClass={img.imgClass}
                alt=""  
            />   
           </div> 
        ))}   
         

        {SearchBarItem.map((item)=>(
            <div key={item.id} className="flex items-center">
                <IconProp
                   icon={item.icon}
                   iconClass={item.iconClass}
                />
                <SearchInputProp
                    placeholderr={item.placeholderr}
                    inputClass={item.inputClass}
                />
            </div>
        ))}    
        </div>

        
        <div className="flex space-x-[2vw] sm:space-x-[3vw]
         lg:space-x-4 xl:space-x-6 ">
        {NavbarList.map((item)=>(
          <div key={item.id} className="text-center 
           hover:text-green-500 text-xs font-light hover:shadow-inner
           hover:shadow-gray-200 hover:rounded-t-sm
          flex flex-col items-center cursor-pointer">          
            <IconProp
               id={item.id}
               icon={item.icon}
               iconClass={item.iconClass}
            />   
             <TitleProps
              title={item.title.map((navtitle,index)=>(<span key={index}>{navtitle.value}</span>))} 
              titleClass={item.titleClass}
            />   
            
          </div>  
        ))}  
        </div>
        
       </div>
       
        
    

    );
}

export default Navbar;