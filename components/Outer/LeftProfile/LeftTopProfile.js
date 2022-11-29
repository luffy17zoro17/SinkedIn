
import ImageProps from '../../Navbar/AllIcons/ImageProps';

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
        ht:500,
        wd:1000,
        text:"",
  },
  {
        id:2,
        title:"ProfileCircle",
        imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
        iconHref:"/",
        classN:`h-[5rem] w-[5rem] border-4 right-[5rem]
          flex justify-center absolute top-14
          border-white rounded-full object-cover`,
        icon:"",
        ht:500,
        wd:500,
        text:"",
  }

]



const LeftTopProfile = () => {
    return (
      <div className="flex flex-col items-center
       justify-center w-[15rem] rounded-tl-xl 
        relative
       rounded-br-xl border">  
         <div className="flex flex-col items-center
         justify-center w-[15rem]">
         {ImageFiles.map((item)=> (
          <div key={item.id}> 
            <ImageProps
               src={item.imgSrc}
               wd={item.wd}
               ht={item.ht}
               className={item.classN}
            />
          </div>
         ))}
         </div>
         <LeftTopProfileText/>
         
         
      </div>  
    )
}

export default LeftTopProfile;