import TextContent from "./TextContent";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const RecentContent = [
   {
      id:1,
      title:"",
      content:[
          "# future",
          "# india",
          "# creativity",
          "# technology",
          "# digitalmarketing",
      ],
      classN:"leading-5 font-semibold text-gray-500 text-xs",
      titleclass:"",
   },  
   {   id:2,
      title:"Groups",
      content:[""],
      classN:"",
      titleclass:"text-blue-500 text-xs font-semibold leading-[2.7rem]",
   },
   {   
      id:3,
      title:"Events",
      content:[""],
      classN:"",
      titleclass:"text-blue-500 font-semibold text-xs leading-[1rem]",
   },
   {   
      id:4,
      title:"Followed Hashtags",
      content:[
         "# future",
         "# india",
         "# creativity",
         ],
      classN:"leading-5 font-semibold text-gray-500 text-xs",  
      titleclass:"text-blue-500 font-semibold text-xs leading-[2.7rem]", 
   }  
]





const LeftBottomRecent = () => {

    return (
     
      <div className="flex flex-col px-4 text-xs
       justify-center w-[15rem] rounded-tl-xl
       bg-white rounded-br-xl border">  
        <h1 className="py-2 pt-4">Recent</h1>
        
        {RecentContent.map((item)=> (
          <div key={item.id}> 
           <TextContent
              id={item.id}
              title={item.title}
              content={item.content.map((hashs)=>(
                        <div>
                           {hashs}
                        </div>   
                        ))}
              className={item.classN}
              titleclass={item.titleclass}
           />
                   
          </div> 
        ))}
        <h3 className="text-xs text-gray-600 py-2 px-3
         font-semibold">Show more <ArrowDownwardIcon className="text-[1.3rem]"/></h3>
        <hr className="border-y-1 w-full 
         flex justify-center mt-3"/> 
        <h3 className="font-bold py-4 
          text-gray-600 text-center
           w-full text-[1rem]">
        
            Discover more
        </h3>
      </div>  
    
     
    );
}

export default LeftBottomRecent