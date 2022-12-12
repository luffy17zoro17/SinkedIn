import ImageProps from './Props/ImageProp';

import LeftTopProfileText from './LeftTopProfileText';






const ImageFiles = [
  { 
        id:1,
        title:"ProfileBackground",
        imgSrc:`/Screenshot from 2022-11-22 21-50-47.png`,
        iconHref:"/",
        imgClass:`h-[5rem] object-cover rounded-br-xl 
              rounded-tl-xl relative left-0 border`,
        icon:"",
        imgPosClass:"",
        text:"",
        iHt:500,
        iWd:1000,
        
  },
  {
        id:2,
        title:"ProfileCircle",
        imgSrc:`https://w0.peakpx.com/wallpaper/279/139/HD-wallpaper-monkey-d-luffy-anime-evening-field-one-piece.jpg`,
        iconHref:"/",
        imgClass:`h-[5rem] w-[5rem] border-2 absolute 
          border-white rounded-full object-cover 
           shadow-sm shadow-black`,
        icon:"",
        imgPosClass:`w-full
         left-0 absolute flex top-10 justify-center`,
        msgleft:``,
        text:`w-[100%] items-center
        absolute left-0 top-10
         flex justify-center`,
        iHt:500,
        iWd:500,
        
  }

]



const LeftTopProfile = () => {
    return (
      <div className="mt-[5rem] mb-5 flex rounded-tl-xl
       justify-center rounded-br-xl
      shadow shadow-black hover:shadow-red-100"> 

      <div className="flex flex-col items-center
       justify-center rounded-tl-xl rounded-br-xl
       
        relative bg-gradient-to-r from-white to-gray-200
       rounded-br-xl sm:mx-[4rem] md:mx-0">  
         <div className="flex flex-col items-center
         justify-center">
         {ImageFiles.map((item)=> (
          <div key={item.id}> 
            <ImageProps
               imgSrc={item.imgSrc}
               iWd={item.iWd}
               iHt={item.iHt}
               imgPosClass={`${item.id===2 && item.imgPosClass}`}
               imgClass={item.imgClass}
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