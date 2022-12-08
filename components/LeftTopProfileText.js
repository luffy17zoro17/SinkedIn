import TurnedInIcon from '@mui/icons-material/TurnedIn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';




const LeftTopProfileText = () => {
    return (
       <div>
        <div className="pt-[5rem] text-center">
        <h1 className="font-bold">Thomas Mathew</h1>
        <p className="text-gray-700 text-xs text-center">
         Web UI Dev| 0penToWork |Tailwind CSS|Next js| /Let my Projects do the talking.
        </p>
        <hr className="h-[1rem] w-[100%] border border-x-0 border-t-0"/>
        
        <h4 className="font-bold text-gray-700 text-xs 
          justify-around leading-5 pt-4
         flex text-justify w-full">
           <span className="w-[10rem]">
               Who's viewed your profile<br/>  
               Impressions of your posts
           </span>
           <b className="text-blue-500 text-end truncate">
             150<br/>
             1,130
           </b>                         
        </h4>
        <hr className="h-[1rem] w-[100%] mt-4 border-y-1"/>
        <span className="text-gray-700 text-xs">Access exclusive tools & insights</span>

        <div className="flex flex-col px-1 py-3 text-xs">

        <span className="underline text-start flex">       
         <span className="px-1"><WorkspacePremiumIcon/></span><b>Get Hired Faster, Try Premium Free</b>
         </span>
      
         <hr className="my-4 border-y-1"/>
        
         <span className="text-start">
           <span className="px-1"><TurnedInIcon className="text-[1.2rem]"/></span><b>My items</b>
         </span>

        </div>

        </div>   
    </div>    
    );
}


export default LeftTopProfileText;