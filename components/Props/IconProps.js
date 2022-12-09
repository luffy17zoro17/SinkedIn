


const IconProps = ({icon, title, text, gapp, iconStyle, textStyle, listBottomTitle}) => {
   
    return (  
      <div className={text}>

      {listBottomTitle ? (
          <svgIcon className={iconStyle}>
            <span>{icon[0]}{listBottomTitle[0]}</span>
            <span>{icon[1]}{listBottomTitle[1]}</span>
            <span>{icon[2]}{listBottomTitle[2]}</span>
            <span>{icon[3]}{listBottomTitle[3]}</span>
            
          </svgIcon>

      ) : (<div></div>)}
        
      
      </div>
    
    );
}

export default IconProps;




{/* <svgIcon 
          className={horiz}>
          <span className={iconStyle}>{icon}</span>
          <h4 className={textStyle}>{title}</h4>

      </svgIcon>   */}