


const IconProps = ({icon, title, text, horiz, iconStyle, textStyle}) => {
   
    return (  
      <div className={text}>
      <svgIcon className={horiz}>
          <span className={iconStyle}>{icon}</span>
          <h4 className={textStyle}>{title}</h4>
      </svgIcon>  
      </div>
    
    );
}

export default IconProps;