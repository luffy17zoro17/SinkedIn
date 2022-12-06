
//"https://www.youtube.com/embed/jnB9T5w7-7w?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_
import IconProps from "./Props/IconProps";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import CelebrationIcon from '@mui/icons-material/Celebration';



import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import SendIcon from '@mui/icons-material/Send';


import PublicIcon from '@mui/icons-material/Public';

import PostContent from "./Props/PostContent";






const PostHeaderIcons = [
  
  {
      id:1,
      title:"Like",
      icon:[<ThumbUpAltIcon/>],
      iconHref:"/",
      classN:"",
      text:"",
      horiz:"flex items-center gap-2 pt-[1rem]",
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
      horiz:"flex items-center gap-2 pt-[1rem]",
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
      horiz:"flex items-center gap-2 pt-[1rem]",
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
      horiz:"flex items-center gap-2 pt-[1rem]",
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
    moreIcon:<MoreHorizIcon/>,
    moreClass:`text-gray-600`,
    title:"Thomas Mathew",
    titleClass:"text-sm font-bold",
    current:" • You",
    currentClass:"text-sm text-gray-400 font-medium",
    following:"",
    detail:"|Web UI Dev| 0penToWork |Tailwind CSS|Next js| /Let my Projects do the talking.",
    detailClass:"text-violet-800 text-xs font-light w-[20rem]",
    timeiconClass:"text-gray-500 text-xs",
    time:"now • ",
    icon:["",<PublicIcon className="text-[1rem]"/>],
    text:"Now THIS is my kind of place :)",
    textClass:"text-sm pt-2 pb-4 px-3",
    classN:"static rounded-t-xl shadow shadow-black",
    pic:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
    iconHref:"/",
    prClass:"rounded-full h-[3rem] w-[3rem] object-cover",
    prHt:70,
    prWd:70,
    picHoriz:"flex gap-3 mb-3 px-3 py-4",
  

    imgSrc:"",
    iht:"",
    iwd:"",
    imgClass:"",
    reactions:[
       <ThumbUpAltIcon className="text-green-400 text-[1rem]"/>,
       <FavoriteIcon className="text-red-600 text-[1rem]"/>,
       <LightbulbCircleIcon className="text-yellow-600 text-[1rem]"/>,],
    reactionsClass:`w-[100%] font-light px-5 pt-3
     flex justify-between text-[0.8rem]`, 
    reactionCount:" 6",  
    interactionCount:"8 comments",
    
   },
   {
    id:2,
    src:"",
    ht:"280",
    wd:"100%",
    moreIcon:<MoreHorizIcon/>,
    moreClass:"text-gray-600",
    title:"Nico Robin",
    titleClass:"font-bold",
    current:" (She/Her) • 1st",
    currentClass:"text-sm text-gray-400 font-medium",
    following:["• Following"],
    detail:"Talent Acquisition Specialist",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:"3h • ",
    icon:[<PublicIcon className="text-[1rem]"/>],
    text:"Dont give in! Keep fighting! Dereshishi :D",
    textClass:"text-sm pt-2 pb-4 px-3",
    classN:"static rounded-t-xl shadow shadow-black",
    pic:`https://w0.peakpx.com/wallpaper/350/172/HD-wallpaper-nico-robin-icon-nico-robin-one-piece.jpg`,
    iconHref:"/",
    prClass:"rounded-full h-[3rem] w-[3rem] object-cover",
    prHt:70,
    prWd:70,
    picHoriz:"flex gap-3 mb-3 px-3 py-4",

    imgSrc:"https://i.pinimg.com/originals/76/47/e8/7647e82733a03003480f61d5a991794a.jpg",
    iht:"200",
    iwd:"490",
    imgClass:"object-cover",
  
    reactions:[,
    <ThumbUpAltIcon className="text-green-400 text-[1rem]"/>,
     <FavoriteIcon className="text-red-600 text-[1rem]"/>,
     <LightbulbCircleIcon className="text-yellow-600 text-[1rem]"/>,
     <CelebrationIcon className="text-violet-600 text-[1rem]"/>],
    reactionsClass:`w-[100%] font-light px-5 pt-3
     flex justify-between text-[0.8rem]`,
    reactionCount:" 34",  
    interactionCount:"49 comments • 12 reposts",
   },
   {
    id:3,
    src:"",
    ht:"280",
    wd:"100%",
    moreIcon:<MoreHorizIcon/>,
    moreClass:"text-gray-600",
    title:"Roronoa Zoro",
    titleClass:"font-bold",
    current:"",
    currentClass:"",
    following:"+ Follow",
    detail:"Self-taught Web Developer ;)",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:"5h • ",
    icon:<PublicIcon className="text-[1rem]"/>,
    text:"Hell yeah!  ;)",
    textClass:"text-sm pt-2 pb-4 px-3",
    classN:"static rounded-t-xl shadow shadow-black",
    pic:`https://w0.peakpx.com/wallpaper/937/618/HD-wallpaper-zoro-aesthetic-roronoa-zoro-green-icon-verde-one-piece-anime.jpg`,
    iconHref:"/",
    prClass:"rounded-full h-[3rem] w-[3rem] object-cover",
    prHt:70,
    prWd:70,
    picHoriz:"flex gap-3 mb-3 px-3 py-4",

    imgSrc:"https://quotetheanime.com/wp-content/uploads/2019/11/Zoro-Quotes.-One-Piece-Quotes.-I-dont-care-waht-society-says.-Ive-never-regretted-doing-anything.-I-do-what-I-want.-Quote-anime-1024x1024.jpg",
    iht:"400",
    iwd:"400",
    imgClass:"object-cover w-[100%] h-[18rem] rounded-t-full",

    reactions:[<ThumbUpAltIcon className="text-green-400 text-[1rem]"/>,
     <FavoriteIcon className="text-red-600 text-[1rem]"/>,
     <LightbulbCircleIcon className="text-yellow-600 text-[1rem]"/>],
    reactionsClass:`w-[100%] font-light px-5 pt-3
     flex justify-between text-[0.8rem]`,
    reactionCount:" 15",  
    interactionCount:"20 comments • 4 reposts",
   },
   {
    id:4,
    src:"https://www.youtube.com/embed/-c552FHJbrM?list=PL4Gr5tOAPttLOY9IrWVjJlv4CtkYI5cI_",
    ht:"280",
    wd:"100%",
    moreIcon:<MoreHorizIcon/>,
    moreClass:"text-gray-600",
    title:["Vinsmoke Sanji",""],
    titleClass:"font-bold",
    current:"",
    currentClass:"",
    following:"",
    detail:"HR Consultant",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:"6h • Edited ",
    icon:<PublicIcon className="text-[1rem]"/>,
    text:"Beauty is something I have great appreciation for!",
    textClass:"text-sm pt-2 pb-4 px-3",
    classN:"static rounded-t-xl shadow shadow-black",
    pic:`https://w0.peakpx.com/wallpaper/201/626/HD-wallpaper-sanji-aesthetic-amarillo-icon-vinsmoke-sanji-yellow-one-piece-anime-thumbnail.jpg`,
    iconHref:"/",
    prClass:"rounded-full h-[3rem] w-[3rem] object-cover",
    prHt:70,
    prWd:70,
    picHoriz:"flex gap-3 mb-3 px-3 py-4",

    imgSrc:"",
    iht:"",
    iwd:"",
    imgClass:"",

    reactions:[<ThumbUpAltIcon className="text-green-400 text-[1rem]"/>,"","","",],
    reactionsClass:`w-[100%] font-light px-5 pt-3
      flex justify-between text-[0.8rem]`,
    reactionCount:" 11",  
    interactionCount:"17 comments • 4 reposts",
   },
   {
    id:5,
    src:"",
    ht:"280",
    wd:"100%",
    moreIcon:<MoreHorizIcon/>,
    moreClass:"text-gray-600",
    title:["SinkedIn",""],
    titleClass:"font-bold",
    current:"",
    currentClass:"",
    following:"",
    detail:"45,572,086 followers ",
    detailClass:"text-violet-800 text-xs font-light",
    timeiconClass:"text-gray-500 text-xs",
    time:`8h • Edited • `,
          
    icon:[<PublicIcon className="text-[1rem]"/>],
    text:`Stay safe and be able to spot and report scammers in SinkedIn.
         SinkedIn updated policies contains clear examples of scams, how to report
          and how SinkedIn responds to such reports.`,
    textClass:"text-sm pt-2 pb-4 px-3",
    classN:"static rounded-t-xl shadow shadow-black",
    pic:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/IN_domain.svg/640px-IN_domain.svg.png`,
    iconHref:"/",
    prClass:`rounded-full h-[3rem] w-[3rem] object-cover border-4 
     border-cyan-400 shadow shadow-black`,
    prHt:70,
    prWd:70,
    picHoriz:"flex gap-3 mb-3 px-3 py-4",

    imgSrc:"https://images.unsplash.com/photo-1592890288564-76628a30a657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    iht:"400",
    iwd:"490",
    imgClass:"",

    reactions:[
      <ThumbUpAltIcon className="text-green-400 text-[1rem]"/>,
      <FavoriteIcon className="text-red-600 text-[1rem]"/>,
      <CelebrationIcon className="text-violet-600 text-[1rem]"/>,
    ],
    reactionsClass:`w-[100%] font-light px-5 pt-3
     flex justify-between text-[0.8rem]`,
    reactionCount:" 214",  
    interactionCount:"545 comments • 22 reposts",
   }

]








const PostList = () => {

    return (
      <div className="w-[100%]">
      <div className="flex flex-col sm:mx-[4rem] md:mx-0 md:mr-[8rem]">
      
      <div className="rounded-xl">
        
       
        {PostListVideo.map((item)=>(

        
         <div key={item.id} className="rounded-xl mb-5 border bg-white"> 
      
          <PostContent
            id={item.id}
            pic={item.pic}
            prHt={item.prHt}
            prWd={item.prWd}
            prClass={item.prClass}
            picHoriz={item.picHoriz}
            src={item.src}
            ht={item.ht}
            wd={item.wd}
            title={item.title}
            titleClass={item.titleClass}
            current={item.current}
            currentClass={item.currentClass}
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
            reactions={[item.reactions]}
            reactionsClass={item.reactionsClass}
            reactionCount={item.reactionCount}
            interactionCount={item.interactionCount}
            moreIcon={item.moreIcon}
            moreClass={item.moreClass}
          />
          
          <div className="flex font-semibold
          text-sm text-gray-500 justify-evenly 
          space-x-[4.4vw]
          p-4">  
          {PostHeaderIcons.map((item)=>(
            <div key={item.id}>
              <hr className="left-0 w-[100%] absolute"/>
              <IconProps
                 title={item.title}
                 icon={item.icon}
                 horiz={item.horiz}
                 iconStyle={item.iconStyle}
                 className={item.classN}
                 text={item.text}
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

















