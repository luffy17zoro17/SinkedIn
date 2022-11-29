

import IconProps from "../../../Navbar/AllIcons/IconProps";
import ImageProps from "../../../Navbar/AllIcons/ImageProps";


import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import SendIcon from '@mui/icons-material/Send';



import VideoContent from "./VideoContent/VideoContent";


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
      title:"Like",
      icon:[<ThumbUpAltIcon/>],
      iconHref:"/",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2",
      iconStyle:"text-pink-500",
      textStyle:"",
   

  },
  {
      id:2,
      title:"Comment",
      icon:[<CommentIcon/>],
      iconHref:"/mynetwork",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2",
      iconStyle:"text-pink-500",
      textStyle:"",

  },
  {
      id:3,
      title:"Repost",
      icon:[<RepeatOnIcon/>],
      iconHref:"/jobs",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2",
      iconStyle:"text-pink-500",
      textStyle:"",

  },
  {
      id:4,
      title:"Send",
      icon:[<SendIcon/>],
      iconHref:"/messaging",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2",
      iconStyle:"text-pink-500",
      textStyle:"",
  },
]



const PostListVideo = [
   {
    id:1,
    src:"https://www.youtube.com/embed/10X1siLTuac?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_",
    ht:"280",
    wd:"100%",
    title:"",
    detail:"",
    pageName:"",
    pageImg:"",
    classN:"static rounded-t-xl shadow shadow-black",
    reactions:[
      {like:{icon:"",no:4}},
      {love:{icon:"",no:2}},
      {applause:{icon:"",no:1}},
      {funny:{icon:"",no:1}}
    ]
   },
   {
    id:2,
    src:"https://www.youtube.com/embed/-c552FHJbrM?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_",
    ht:"280",
    wd:"100%",
    title:"",
    detail:"",
    pageName:"",
    pageImg:"",
    classN:"static rounded-t-xl shadow shadow-black",
    reactions:[
      {like:{icon:"",no:5}},
      {love:{icon:"",no:1}},
      {applause:{icon:"",no:2}},
      {funny:{icon:"",no:2}}
    ]
   },
   {
    id:3,
    src:"https://www.youtube.com/embed/jnB9T5w7-7w?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_",
    ht:"280",
    wd:"100%",
    title:"",
    detail:"",
    pageName:"",
    pageImg:"",
    classN:"static rounded-t-xl shadow shadow-black",
    reactions:[
      {like:{icon:"",no:7}},
      {love:{icon:"",no:3}},
      {applause:{icon:"",no:2}},
      {funny:{icon:"",no:3}}
    ]
   }

]



const PostList = () => {

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

        
        Post lIST
        {PostListVideo.map((item)=>(
         <div key={item.id}> 
          <VideoContent
            id={item.id}
            src={item.src}
            ht={item.ht}
            wd={item.wd}
            title={item.title}
            detail={item.detail}
            pageName={item.detail}
            classN={item.classN}
          />
          <div className="flex font-semibold
          text-sm text-gray-500 justify-evenly 
          space-x-[4.4vw]
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
        ))}  
      
      </div>  
    );  
    
}

export default PostList;

















