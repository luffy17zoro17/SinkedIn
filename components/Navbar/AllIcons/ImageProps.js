
import Image from 'next/image';




const ImageProps = ({src,className,ht,wd,text,title,icon,msg, msgClassN,titleClassN, date, dateClassN, msgleft}) => {

    return (  
       <div className={text}>
       <div className={msgleft}>
       <div> 
        <Image
          src={src}
          className={className}
          height={ht}
          width={wd}
          alt=""
        /> 
       </div> 
       <div> 
        <h4 className={titleClassN}>{title}{icon}</h4>
        <h5 className={msgClassN}>{msg}</h5>
       </div>
       </div>
       
        <h4 className={dateClassN}>{date}</h4>
       </div>
    );
}

export default ImageProps;