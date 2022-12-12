import Image from 'next/image';





const ImageProp = ({imgSrc,iHt,iWd,imgClass,imgPosClass}) => {
      return (

       <div className={imgPosClass}>    
        <Image
          src={imgSrc}
          height={iHt}
          width={iWd}
          className={imgClass}
          alt=""
        />
       </div> 
       
      );
}

export default ImageProp;