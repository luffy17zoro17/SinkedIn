
import ImageProps from './Props/ImageProps';

import LeftTopProfileText from './LeftTopProfileText';





const ImageFiles = [
  { 
        id:1,
        title:"ProfileBackground",
        imgSrc:`/Screenshot from 2022-11-22 21-50-47.png`,
        iconHref:"/",
        classN:`h-[5rem] object-cover rounded-br-xl 
              rounded-tl-xl relative left-0`,
        icon:"",
        msgleft:"",
        text:"",
        ht:500,
        wd:1000,
        
  },
  {
        id:2,
        title:"ProfileCircle",
        imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
        iconHref:"/",
        classN:`h-[5rem] w-[5rem] border-4    
          border-white rounded-full object-cover`,
        icon:"",
        msgleft:``,
        text:`w-[100%] items-center
        absolute left-0 top-10
         flex justify-center`,
        ht:500,
        wd:500,
        
  }

]



const LeftTopProfile = () => {
    return (
      <div className="mt-[5rem] mb-5 flex flex-col justify-center 
       border-4 border-black"> 
      <div className="flex flex-col items-center
       justify-center rounded-tl-xl
        relative bg-white
       rounded-br-xl border sm:mx-[4rem] md:mx-0">  
         <div className="flex flex-col items-center
         justify-center">
         {ImageFiles.map((item)=> (
          <div key={item.id}> 
            <ImageProps
               src={item.imgSrc}
               wd={item.wd}
               ht={item.ht}
               classN={item.classN}
               msgleft={item.msgleft}
               text={item.text}
            />
          </div>
         ))}
         </div>
         <LeftTopProfileText/>
         
         
      </div>  
      </div>
    )
}

export default LeftTopProfile;