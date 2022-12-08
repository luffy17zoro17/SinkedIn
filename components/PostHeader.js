import IconProps from "./Props/IconProps";
import ImageProps from "./Props/ImageProps";

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArticleIcon from '@mui/icons-material/Article';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StartAPost from "./StartAPost";





const PostHeaderImg= [
  {
      id:1,
      title:"",
      imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
      iconHref:"/",
      classN:"rounded-full h-[3rem] w-[3.5rem] object-cover",
      icon:"",
      ht:700,
      wd:700,
      text:"",
  }  
]




const PostHeaderIcons = [
  
  {
      id:1,
      title:"Photo",
      icon:[<InsertPhotoIcon/>],
      iconHref:"/",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2",
      iconStyle:"text-blue-400",
      textStyle:"",
   

  },
  {
      id:2,
      title:"Video",
      icon:[<SmartDisplayIcon/>],
      iconHref:"/mynetwork",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2",
      iconStyle:"text-green-500",
      textStyle:"",

  },
  {
      id:3,
      title:"Jobs",
      icon:[<BusinessCenterIcon/>],
      iconHref:"/jobs",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2",
      iconStyle:"text-violet-500",
      textStyle:"",

  },
  {
      id:4,
      title:"Article",
      icon:[<ArticleIcon/>],
      iconHref:"/messaging",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2",
      iconStyle:"text-orange-500",
      textStyle:"",
  },
]






const PostHeader = ({postOpen, setPostOpen, title, imgSrc,icon,
   zeroClass, oneClass, threeClass, isClose, setIsClose}) => {
    return (
   
     <div className="flex flex-col mt-[3rem] 
        sm:mx-[4rem]
         md:mx-0 md:mt-[5.3rem]"> 
      <div className="rounded-xl border w-full
        shadow shadow-black
        bg-gradient-to-r from-white to-gray-200">
        <div className="flex mx-3 pt-3 gap-3">
        <div className="">
        {PostHeaderImg.map((item)=>(
          <div key={item.id}>
          <ImageProps
             src={item.imgSrc}
             ht={item.ht}
             wd={item.wd}
             classN={item.classN}
          />
          </div>
        ))}
        </div>
        <span onMouseDown={()=>setPostOpen(true)} 
        className="border text-gray-700 rounded-3xl text-sm font-semibold
           p-3 w-[100%] cursor-pointer bg-white shadow-inner shadow-gray-400">
           Start a post
        </span>

        
        </div>

        <div>  
        {postOpen === true && (
        
         <div className="border-4 border-red-600">
         <StartAPost
           title={title}
           imgSrc={imgSrc}
           icon={icon}
           zeroClass={zeroClass}
           oneClass={oneClass}
           threeClass={threeClass}
           setPostOpen={setPostOpen}
           isClose={isClose}
           setIsClose={setIsClose}
         />
         </div>
      
        )}
        </div>
        

        <div className="flex font-semibold
        text-sm text-gray-900 justify-evenly 
         space-x-[1rem]
         p-4">  
        {PostHeaderIcons.map((item)=>(
            <div key={item.id}>
              
              <IconProps
                 title={item.title}
                 icon={item.icon}
                 horiz={item.horiz}
                 iconStyle={item.iconStyle}
                 className={item.classN}
              />
            </div>  
        ))}
        </div>
      </div>

     <span className="flex text-xs items-center text-gray-500 text-end">
       <hr className="h-[0.1rem] border-gray-400 my-4 w-full"/>
       <span className="w-[8rem]">
       <span>Sort by:</span> 
       <b className="text-black">&nbsp;Top<ArrowDropDownIcon/></b>
       </span>
     </span>

     </div> 
     
  
    );
}

export default PostHeader;