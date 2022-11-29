



import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AppsIcon from '@mui/icons-material/Apps';
import NextWeekIcon from '@mui/icons-material/NextWeek';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchBar from "./AllIcons/SearchBar/SearchBar";
import ImageProps from "./AllIcons/ImageProps";
import IconProps from "./AllIcons/IconProps";






const SearchBarItem = [
    {
        placeholder:"Search",
        icons:[""],
        inputClass:`bg-gray-200 pl-10 outline-none
             py-2 placeholder-gray-600 rounded-md text-sm`
    }
]


const NavbarImages= [
    {
        id:1,
        title:"",
        imgSrc:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/IN_domain.svg/640px-IN_domain.svg.png`,
        iconHref:"/",
        classN:"rounded-full h-[2rem] w-[2rem] object-cover",
        icon:"",
        ht:500,
        wd:500,
        text:"",
      

    },
    {
        id:2,
        title:"Me",
        imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
        iconHref:"/thomasmathew",
        classN:"h-[1.4rem] w-[1.4rem] rounded-full object-cover flex",
        icon:<KeyboardArrowDownIcon/>,
        ht:500,
        wd:500,
        text:`font-light text-xs flex flex-col items-center
         fixed left-0 justify-center pl-[36rem]
         w-[100%] top-1`,
     
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
        textStyle:""

     
 
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
        textStyle:""

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
        textStyle:"",

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
        textStyle:"",
    },
    {
        id:5,
        title:"Notifications",
        icon:<CircleNotificationsIcon/>,
        iconHref:"/notifications",
        classN:"",
        text:"text-center font-light text-xs",
        horiz:"",
        iconStyle:"",
        textStyle:"",

    },
 
    {
        id:6,
        title:"Work",
        icon:[<AppsIcon/>,<KeyboardArrowDownIcon/>],
        iconHref:"/Work",
        classN:"",
        text:"text-center font-light text-xs pl-[6rem]",
        horiz:"",
        iconStyle:"",
        textStyle:"",

    },
    {
        id:7,
        title:"Post a job for free",
        icon:<NextWeekIcon/>,
        iconHref:"/postajob",
        classN:"",
        text:"text-center font-light text-xs",
        horiz:"",
        iconStyle:"",
        textStyle:"",
    }
]








const Navbar = () => {

    
    return (
        
        <div className="flex items-center w-[100%] border z-30 shadow shadow-black 
         flex 
        justify-center space-x-[2rem] fixed top-0 bg-white">

         
        {NavbarImages.map((img)=>(          
          <div key={img.id}>          
            <ImageProps
               className={img.classN}
               id={img.id}
               ht={img.ht}
               wd={img.wd}
               icon={img.icon}
               text={img.text}
               title={img.title}
               src={img.imgSrc}  
          
            />     
          </div>
        ))}
    
        {SearchBarItem.map((item) => (
           <SearchBar
             placeholder={item.placeholder}
             icon={item.icons}
             inputClass={item.inputClass}
           /> 

        ))}
        
          
        {NavbarIcons.map((item)=>(
          <div key={item.id}>          
            <IconProps
               id={item.id}
               title={item.id===6 ? [item.title,item.icon[1]] : item.title}
               icon={(item.id===6) ? (item.icon[0]) : (item.icon)}
               href={item.iconHref}
               text={item.text}
               horiz={item.horiz}
               classN={item.id===6 ? item.classN : ""}
            />        
          </div>  
        ))}         
        </div>
    

    );
}

export default Navbar;