


const IconProps = ({icon, title, text}) => {
   
    return (  
      <div className={text}>
      <svgIcon>
          {icon}
          <h4>{title}</h4>
      </svgIcon>  
      </div>
    
    );
}

export default IconProps;