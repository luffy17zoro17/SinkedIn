
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






const SearchBarItem = [
    {
        id:1,
        placeholderr:"Search",
        icon:[<SearchIcon className="p-[0.1rem]"/>],
        title:"Search",
        inputClass:`bg-gray-200 outline-none p-2
          pl-11 text-sm rounded-t-md`,
        iconClass:"absolute pl-3"

          
    }
]


const NavbarLogo= [
    {
        id:1,
        imgSrc:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/IN_domain.svg/640px-IN_domain.svg.png`,
        imgClass:`rounded-full h-[2.8rem] w-[2.8rem] object-cover border-4
          border-green-400 shadow shadow-black`,
        iHt:50,
        iWd:50,
    },
]




const NavbarList = [
    
    {
        id:1,
        title:"Home",
        icon:<HomeIcon/>,  
    },
   {
        id:2,
        title:"My Network",
        icon:<PeopleIcon/>,
    },
    {
        id:3,
        title:"Jobs",
        icon:<WorkIcon/>,
    },
    {
        id:4,
        title:"Messaging",
        icon: <MessageIcon/>,
    },
    {
        id:5,
        title:"Notifications",
        icon: <CircleNotificationsIcon/>,
    },
    {   
        id:6,
        title:["Me",<KeyboardArrowDownIcon/>],
        icon:<Image src="https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg"
                   alt="" className="object-cover rounded-full h-[1.4rem] w-[1.4rem]" 
                   height={50} width={50}/>,
    },
    {
        id:7,
        title:["Work",<KeyboardArrowDownIcon/>],
        icon:<AppsIcon/>,

    },
    {
        id:8,
        title:"Post a job for free",
        icon:[<NextWeekIcon/>,],
     
    }
] 








const Navbar = () => {

    
    return (
        
        <div className="flex z-30 shadow shadow-black 
        justify-around
        items-center fixed bg-white h-[3.5rem] w-full
         px-3">
            
        <div className="flex gap-3">   
        {NavbarLogo.map((img)=>(          
          <div key={img.id} className="hover:text-violet-500 cursor-pointer">          
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

        
        <div className="flex">
        {NavbarList.map((item)=>(
          <div key={item.id} className="text-center 
           hover:text-violet-500 text-xs font-light
          flex flex-col items-center mx-5">          
            <IconProp
               id={item.id}
               icon={item.icon}
            />   
            <h2>{item.title}</h2>     
          </div>  
        ))}  
        </div>
        
       </div>
       
        
    

    );
}

export default Navbar;