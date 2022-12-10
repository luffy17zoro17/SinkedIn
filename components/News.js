import TextContent from "./Props/TextContent";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const NewsContent = [
  {
    id:1,
    title:"• Climate tech needs equitable funding",
    content:"19h ago",
    classN:"text-xs text-gray-500 pb-2",
    titleclass:"font-medium text-sm",

  },
  {
    id:2,
    title:"• Job switch = higher pay?",
    content:"1d ago 10,348 readers",
    classN:"text-xs text-gray-500 pb-2",
    titleclass:"font-medium text-sm",
  },
  {
    id:3,
    title:"• Banking for Gen Zs",
    content:"20h ago 716 readers",
    classN:"text-xs text-gray-500 pb-2",
    titleclass:"font-medium text-sm",
  },
  {
    id:4,
    title:"• India's mobile user base shrinks",
    content:"1d ago 1,332 readers",
    classN:"text-xs text-gray-500 pb-2",
    titleclass:"font-medium text-sm",
  },
  {
    id:5,
    title:"• New destinations for study abroad",
    content:"19h ago 810 readers",
    classN:"text-xs text-gray-500 pb-2",
    titleclass:"font-medium text-sm",
  },
  {
    id:6,
    title:"• Coding for driverless EVs",
    content:"2d ago 1,028 readers",
    classN:"text-xs text-gray-500 pb-2",
    titleclass:"font-medium text-sm",
  }
]




const News = () =>{
    return (
      <div className="p-3 mt-[5rem] pb-[0.9rem] rounded-bl-xl 
          hover:shadow-red-100
         shadow shadow-black bg-gradient-to-r from-white to-gray-200
         rounded-tr-xl px-8 hidden lg:block">
         <h1 className="font-medium text-md pb-4">LinkedIn News</h1>
         {NewsContent.map((item) => (
            <div key={item.id}>
              <TextContent
                 title={item.title}
                 content={item.content}
                 className={item.classN}
                 titleclass={item.titleclass}

              />
            </div>  
         ))}
         <span className="text-sm font-semibold 
           text-gray-500 px-3">
           Show more <ArrowDownwardIcon className="text-[1.4rem]"/>
         </span>
      </div>  
    );
}

export default News;