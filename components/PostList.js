
//"https://www.youtube.com/embed/jnB9T5w7-7w?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_
import IconProps from "./Props/IconProps";
import ImageProps from "./Props/ImageProps";


import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import SendIcon from '@mui/icons-material/Send';


import PublicIcon from '@mui/icons-material/Public';

import PostContent from "./Props/PostContent";


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
    src:"https://www.youtube.com/embed/10X1siLTuac?&autoplay=1&mute=1&enablejsapi=1list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_",
    ht:"280",
    wd:"100%",
    title:["Thomas Mathew", " • 1st"],
    titleClass:"font-bold",
    following:"",
    detail:"|Web UI Dev| 0penToWork |Tailwind CSS|Next js| /Let my Projects do the talking.",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:"1h • ",
    icon:["now ",<PublicIcon className="text-[1rem]"/>],
    text:"Now THIS is my kind of place :)",
    textClass:"text-sm",
    classN:"static rounded-t-xl shadow shadow-black",

    imgSrc:"",
    iht:"",
    iwd:"",
    reactions:[
      {like:{icon:"",no:4}},
      {love:{icon:"",no:2}},
      {applause:{icon:"",no:1}},
      {funny:{icon:"",no:1}}
    ]
   },
   {
    id:2,
    src:"https://www.youtube.com/embed/-c552FHJbrM?autoplay=1&mute=1&enablejsapi=1list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_",
    ht:"280",
    wd:"100%",
    title:["Robin",""],
    titleClass:"font-bold",
    following:["• Following"],
    detail:"Talent Acquisition Specialist",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:"3h • ",
    icon:[<PublicIcon className="text-[1rem]"/>," Promoted"],
    text:"",
    textClass:"",
    classN:"static rounded-t-xl shadow shadow-black",

    imgSrc:"",
    iht:"",
    iwd:"",
  
    reactions:[
      {like:{icon:"",no:5}},
      {love:{icon:"",no:1}},
      {applause:{icon:"",no:2}},
      {funny:{icon:"",no:2}}
    ]
   },
   {
    id:3,
    src:"",
    ht:"280",
    wd:"100%",
    title:"Roronoa Zoro",
    titleClass:"font-bold",
    following:"+ Follow",
    detail:"Self-taught Web Developer ;)",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:"5h • ",
    icon:"",
    text:"",
    textClass:"",
    classN:"static rounded-t-xl shadow shadow-black",

    imgSrc:"https://quotetheanime.com/wp-content/uploads/2019/11/Zoro-Quotes.-One-Piece-Quotes.-I-dont-care-waht-society-says.-Ive-never-regretted-doing-anything.-I-do-what-I-want.-Quote-anime-1024x1024.jpg",
    iht:"400",
    iwd:"400",
    imgClass:"object-cover w-[100%] h-[18rem] rounded-t-full",

    reactions:[
      {like:{icon:"",no:7}},
      {love:{icon:"",no:3}},
      {applause:{icon:"",no:2}},
      {funny:{icon:"",no:3}}
    ]
   },
   {
    id:4,
    src:"https://www.youtube.com/embed/-c552FHJbrM?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_",
    ht:"280",
    wd:"100%",
    title:["Vinsmoke Sanji",""],
    titleClass:"font-bold",
    following:"",
    detail:"HR Consultant",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:"6h • ",
    icon:["Promoted",""],
    text:"",
    textClass:"",
    classN:"static rounded-t-xl shadow shadow-black",

    imgSrc:"",
    iht:"",
    iwd:"",

    reactions:[
      {like:{icon:"",no:5}},
      {love:{icon:"",no:1}},
      {applause:{icon:"",no:2}},
      {funny:{icon:"",no:2}}
    ]
   },
   {
    id:5,
    src:"https://www.youtube.com/embed/jnB9T5w7-7w?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_",
    ht:"280",
    wd:"100%",
    title:["SinkedIn",""],
    titleClass:"font-bold",
    following:"45,572,086 followers",
    detail:"",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:"1d",
    icon:["Promoted","..."],
    text:"",
    textClass:"",
    classN:"static rounded-t-xl shadow shadow-black",

    imgSrc:"",
    iht:"",
    iwd:"",

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
      
      <div className="flex flex-col w-[100%]">
      <div className="bg-white">
      <div className="rounded-xl border p-3">
        <div className="flex m-3 gap-3">
        <div className="">

        {PostHeaderImg.map((img)=>(
          <div key={img.id}>
          <ImageProps
             src={img.imgSrc}
             ht={img.ht}
             wd={img.wd}
             className={img.classN}
          />
          </div>
        ))}
        </div>
        </div>
       
        {PostListVideo.map((item)=>(

        
         <div key={item.id}> 
      
          <PostContent
            id={item.id}
            src={item.src}
            ht={item.ht}
            wd={item.wd}
            title={item.title}
            titleClass={item.titleClass}
            detail={item.detail}
            detailClass={item.detailClass}
            timeiconClass={item.timeiconClass}
            icon={item.icon}
            following={item.following}
            time={item.time}
            text={item.text}
            textClass={item.textClass}
            classN={item.classN}
            imgSrc={item.imgSrc}
            iht={item.iht}
            iwd={item.iwd}
            imgClass={item.imgClass}
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
      </div> 
      </div>
    );  
    
}

export default PostList;

















