import ImageProps from "./Props/ImageProp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import FooterText from "./FooterText";



const SinkedIn= [{
  id:1,
  imgSrc:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/IN_domain.svg/640px-IN_domain.svg.png`,
  iconHref:"/",
  imgClass:`rounded-full h-[1.4rem] w-[1.4rem] object-cover
    border-2 border-green-400 shadow shadow-black`,
  iHt:580,
  iWd:580,


}]



const DownIcon = [
    
    {
        id:1,
        title:"Dropdown",
        icon:<ArrowDropDownIcon/>,
        iconHref:"/",
        classN:"",
        text:""
    },
   
]








const Footer = () => {
    return (
      <div className="items-center text-center flex
       flex-col shadow shadow-black pb-4
        hover:shadow-red-100
       rounded-bl-xl rounded-tr-xl
       bg-gradient-to-r from-white to-gray-200">

        {DownIcon.map((item)=>(
        <div key={item.id}> 
         <FooterText
            icon={item.icon}     
         />
         </div>
        ))}  

        <span className="flex text-[0.8rem] mt-5">
           <b className="text-green-500">SinkedIn&nbsp;</b>
          {SinkedIn.map((item)=>(
           <div key={item.id}> 
           <ImageProps
             imgSrc={item.imgSrc}
             iHt={item.iHt}
             iWd={item.iWd}
             imgClass={item.imgClass}
           />
           </div>
          ))}
           &nbsp;SinkedIn Corporation © 2022
        </span>
      </div> 
      
    
    );
}

export default Footer;