import IconProps from "../../../Navbar/AllIcons/IconProps";
import ImageProps from "../../../Navbar/AllIcons/ImageProps";

import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArticleIcon from '@mui/icons-material/Article';


const PostHeaderImg= [
  {
      id:1,
      title:"",
      imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
      iconHref:"/",
      classN:"rounded-full h-[3rem] w-[3rem] object-cover",
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
      text:"text-center font-light text-xs",
      horiz:"flex",
      iconStyle:"text-blue-400",
      textStyle:"",
   

  },
  {
      id:2,
      title:"Video",
      icon:[<SmartDisplayIcon/>],
      iconHref:"/mynetwork",
      classN:"",
      text:"text-center font-light text-xs",
      horiz:"flex",
      iconStyle:"text-green-500",
      textStyle:"",

  },
  {
      id:3,
      title:"Jobs",
      icon:[<BusinessCenterIcon/>],
      iconHref:"/jobs",
      classN:"",
      text:"text-center font-light text-xs",
      horiz:"flex",
      iconStyle:"text-violet-500",
      textStyle:"",

  },
  {
      id:4,
      title:"Article",
      icon:[<ArticleIcon/>],
      iconHref:"/messaging",
      classN:"",
      text:"text-center font-light text-xs",
      horiz:"flex",
      iconStyle:"text-orange-500",
      textStyle:"",
  },
]





const PostHeader = () => {
    return (
      <div className="rounded-xl border p-3">
        <div className="flex mx-3 gap-3">
        <div className="">
        {PostHeaderImg.map((item)=>(
          <div key={item.id}>
          <ImageProps
             src={item.imgSrc}
             ht={item.ht}
             wd={item.wd}
             className={item.classN}
          />
          </div>
        ))}
        </div>
        <div className="border text-gray-500 rounded-3xl text-sm font-semibold
          border-gray-400 pl-3 py-3 pr-[23rem]">
           Start a post
        </div>
        </div>

        <div className="flex font-semibold
        text-sm text-gray-500 justify-evenly 
         space-x-[4.4vw]
         p-4 border">
        {PostHeaderIcons.map((item)=>(
            <div key={item.id}>
              
              <IconProps
                 title={item.title}
                 icon={item.icon}
                 horiz={item.horiz}
                 iconStyle={item.iconStyle}
              />
            </div>  
        ))}
        </div>
      </div>  
    );
}

export default PostHeader;