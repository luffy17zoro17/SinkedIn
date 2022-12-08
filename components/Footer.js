import ImageProps from "./Props/ImageProps";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import FooterText from "./Props/FooterText";



const SinkedIn= [{
  id:1,
  title:"",
  imgSrc:`https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/IN_domain.svg/640px-IN_domain.svg.png`,
  iconHref:"/",
  classN:`rounded-full h-[1.4rem] w-[1.4rem] object-cover
    border-4 border-green-400 shadow shadow-black`,
  icon:"",
  ht:480,
  wd:480,
  text:"",

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
       flex-col bg-white border-4 border-black">

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
           <ImageProps
             src={item.imgSrc}
             ht={item.ht}
             wd={item.wd}
             classN={item.classN}
           />
          ))}
          &nbsp;SinkedIn Corporation © 2022
        </span>
      </div> 
      
    
    );
}

export default Footer;