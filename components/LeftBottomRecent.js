import TextContent from "./Props/TextContent";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const RecentContent = [
   {
      id:1,
      title:"",
      content:[
         {idc:'a', value:"# future"},
         {idc:'b', value:"# india"},
         {idc:'c', value:"# creativity"},
         {idc:'d', value:"# technology"},
         {idc:'e', value:"# digitalmarketing"},
      ],
      classN:"leading-5 font-semibold text-gray-600 text-xs",
      titleclass:"",
   },  
   {   id:2,
      title:"Groups",
      content:[{id:'a',value:""}],
      classN:"",
      titleclass:"text-blue-500 text-xs font-semibold leading-[2.7rem]",
   },
   {   
      id:3,
      title:"Events",
      content:[{id:'a',value:""}],
      classN:"",
      titleclass:"text-blue-500 font-semibold text-xs leading-[1rem]",
   },
   {   
      id:4,
      title:"Followed Hashtags",
      content:[
       {id:'a',value:"# future"},
       {id:'b',value:"# india"},
       {id:'c',value:"# creativity"},
      ],
      classN:"leading-5 font-semibold text-gray-600 text-xs",  
      titleclass:"text-blue-500 font-semibold text-xs leading-[2.7rem]", 
   }  
]





const LeftBottomRecent = () => {

    return (
      <div className="shadow shadow-black rounded-tl-xl
       rounded-br-xl hover:shadow-red-100
      sm:mx-[4rem] md:mx-0">
      <div className="flex flex-col text-xs pb-2
         rounded-tl-xl text-start pl-4 z-10 bg-gradient-to-r 
         from-white to-gray-200">  
        <h1 className="py-2 pt-4">Recent</h1>

       
        
        {RecentContent.map((item)=> (
          <div key={item.id}> 
           <TextContent
              id={item.id}
              title={item.title}
              content={item.content.map((hashs,index)=>(
                <div key={index}>
                   {hashs.value}
                </div>  
                ))}
              className={item.classN}
              titleclass={item.titleclass}
           />
          </div> 
        ))}
       
      
         
            
          


        <h3 className="text-xs text-gray-600 py-2 px-3
         font-semibold">Show more <ArrowDownwardIcon className="text-[1.3rem]"/></h3>
      
      </div>  
      <h3 className="font-bold py-4
       bg-white rounded-br-xl
      text-gray-600 text-center border-t-[0.1rem]
       px-4 text-[1rem]">
        Discover more
      </h3>
   
      </div>
    
     
    );
}

export default LeftBottomRecent