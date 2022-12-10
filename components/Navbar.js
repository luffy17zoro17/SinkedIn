
import SearchIcon from '@mui/icons-material/Search';


import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AppsIcon from '@mui/icons-material/Apps';
import NextWeekIcon from '@mui/icons-material/NextWeek';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ImageProps from "./Props/ImageProp";
import IconProps from "./Props/IconProp";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';






const SearchBarItem = [
    {
        id:1,
        placeholderr:"Search",
        icons:[<SearchIcon/>],
        title:"Search",
          
    }
]


const NavbarImages= [
    {
        id:1,
        title:"",
        imgSrc:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/IN_domain.svg/640px-IN_domain.svg.png`,
            //https://w0.peakpx.com/
        iconHref:"/",
        classN:`rounded-full h-[2.8rem] w-[2.8rem] object-cover border-4
          border-green-400 shadow shadow-black`,
        icon:"",
        ht:500,
        wd:500,
        text:"",
      

    },
    
]




const NavbarList = [
    
    {
        id:1,
        navTitle:[
           "Home",
           "My Network",
           "Jobs",
           "Messaging",
           "Notifications",
           "Me",
           "Work",
           "Post a job for free"],
        icon:[
         <HomeIcon/>,
         <PeopleIcon/>,
         <WorkIcon/>,
         <MessageIcon/>,
         <CircleNotificationsIcon/>,
         <AppsIcon/>,
         <KeyboardArrowDownIcon/>,
         <NextWeekIcon/>,
         <MoreHorizIcon/>,
         <KeyboardArrowDownIcon/>
        ],

        imgSrc:[
          `https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`],
        imgClass:"h-[1.4rem] w-[1.4rem] rounded-full object-cover",   
        imgHt:500,
        imgWd:500,
        horiz:"",
        iconStyle:"cursor-pointer hover:text-violet-500",
        textStyle:[`border-4 font-light text-xs
          shadow rounded-xl px-1 shadow-gray-200 hidden md:flex
          flex-col`],  
 
    },
  ]

 /*   {
        id:2,
        title:"My Network",
        icon:[],
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
        icon:[],
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
        icon:,
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
        icon:,
        iconHref:"/notifications",
        classN:"",
        text:"text-center font-light text-xs",
        //horiz:"invisible lg:visible",
        iconStyle:"",
        textStyle:"shadow rounded-xl px-1 shadow-gray-200 hidden lg:flex",

    },
 
    {
        id:6,
        title:"Work",
        icon:[,
        iconHref:"/Work",
        classN:"",
        //text:"text-center font-light text-xs pl-[6vw] pt-[0.4rem]",
        //horiz:"flex flex-col items-center",
        iconStyle:"hidden sm:flex",
        textStyle:"shadow px-1 shadow-gray-300 flex items-center hidden md:flex",

    },
    {
        id:7,
        title:"Post a job for free",
        icon:,
        iconHref:"/postajob",
        classN:"",
        text:"text-center font-light text-xs",
        //horiz:"flex flex-col items-center",
        iconStyle:"hidden sm:flex",
        textStyle:`shadow rounded-xl px-1 shadow-gray-200 hidden md:flex`,
    }
] */








const Navbar = () => {

    
    return (
        <>
        <div className="flex z-30 shadow shadow-black 
        justify-around 
        items-center fixed top-0 bg-white h-[3.5rem] w-full
         px-3">

      
        {NavbarImages.map((img)=>(          
          <div key={img.id} className="hover:text-violet-500 cursor-pointer">          
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
    
        
        
        
        <div>
        {NavbarList.map((item)=>(
          <div key={item.id} className="text-center">          
            <IconProps
               id={item.id}
               navTitle={item.navTitle}
               icon={item.icon}
               text={item.text}
               textStyle={item.textStyle}
               horiz={item.horiz}
               classN={item.classN}
               iconStyle={item.iconStyle}
               topClass={item.topClass}
            />        
          </div>  
        ))}  
        </div>
        
       </div>
        </>
    

    );
}

export default Navbar;