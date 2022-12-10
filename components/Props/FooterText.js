import IconProps from "./IconProp";





const FooterText = ({icon}) => {
    return (
        
        <div className=""> 
        <div className="flex flex-col text-xs
           text-gray-600">
        <span className="py-2 pt-5">
           <span>About&nbsp;</span>
           <span>Accessibility&nbsp;</span>
           <span>Help Center</span>
        </span>
        <span className="flex items-center justify-center">
          <span className="flex items-center">Privacy & Terms
          <IconProps icon={icon}/></span>
          <span>Ad Choices</span>
        </span>
        </div>

        <div className="flex flex-col text-gray-600
          text-xs">
        <span className="flex items-center 
         pt-2"> 
          <span>Advertising &nbsp;</span>
          <span className="flex items-center">
            Business Services<IconProps icon={icon}/></span>  
        </span>
        <span className="pt-2">
          <span>Get the SinkedIn app</span>
          <span>&nbsp;More</span>  
        </span>
        </div>
        </div>
        
    )
}


export default FooterText;