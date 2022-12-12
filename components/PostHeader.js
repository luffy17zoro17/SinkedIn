import IconProp from "./Props/IconProp";
import ImageProp from "./Props/ImageProp";

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
      imgClass:"rounded-full h-[3rem] w-[3.5rem] object-cover",
      iHt:700,
      iWd:700,
      text:"",
  }  
]




const PostHeaderIcons = [
  
  {
      id:1,
      title:"Photo",
      icon:<InsertPhotoIcon className="text-blue-400 mr-2"/>,
  },
  {
      id:2,
      title:"Video",
      icon:<SmartDisplayIcon className="text-green-500 mr-2"/>, 
  },
  {
      id:3,
      title:"Jobs",
      icon:<BusinessCenterIcon className="text-violet-500 mr-2"/>,
  },
  {
      id:4,
      title:"Article",
      icon:<ArticleIcon className="text-orange-600 mr-2"/>,
  },
]






const PostHeader = ({postOpen, setPostOpen, title, imgSrc,icon,
   zeroClass, oneClass, threeClass, isClose, setIsClose}) => {
    return (
   
     <div className="flex flex-col mt-[3rem] 
        sm:mx-[4rem]
         md:mx-0 md:mt-[5rem]"> 
      <div className="rounded-xl w-full
        shadow shadow-black hover:shadow-red-100
        bg-gradient-to-r from-white to-gray-200">
        <div className="flex mx-3 pt-3 gap-3">
        <div className="">
        {PostHeaderImg.map((item)=>(
          <div key={item.id}>
          <ImageProp
             imgSrc={item.imgSrc}
             iHt={item.iHt}
             iWd={item.iWd}
             imgClass={item.imgClass}
          />
          </div>
        ))}
        </div>
        <span onMouseDown={()=>setPostOpen(true)} 
        className="text-gray-700 rounded-3xl text-sm font-semibold hover:shadow-red-800
           p-3 w-[100%] cursor-pointer bg-red-100 shadow-inner shadow-black">
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
            <div key={item.id} className="flex items-center">  
              <IconProp
                 icon={item.icon}
                 className={item.classN}
              />
              <h3>{item.title}</h3>
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