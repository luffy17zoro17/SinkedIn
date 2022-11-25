
import Image from 'next/image';




const ImageProps = ({src,className,ht,wd,text,title,icon}) => {

    return (  
       <div className={text}>
        <Image
          src={src}
          className={className}
          height={ht}
          width={wd}
          alt=""
        /> 
        <h4>{title}{icon}</h4>
       </div>
    );
}

export default ImageProps;