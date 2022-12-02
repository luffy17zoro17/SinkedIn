import Image from "next/image";




const PostContent = ({src,ht,wd,title, titleClass, classN, detail,time,following,text,icon,
   detailClass,timeiconClass, textClass,imgSrc,iht,iwd, imgClass}) => {

    return (
      <div>
        <h2 className={titleClass}>{title}</h2>
        <p className={detailClass}>{detail}</p>
        <span className={timeiconClass}>{time}{icon}</span>
        <p className={textClass}>{text}</p>


        {src ? (            // for video
        <iframe className={classN} width={wd} height={ht} src={src} 
        title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"> 
        </iframe>
        ) : (
        <div>
          <Image
          src={imgSrc}
          height={iht}      // for image
          width={iwd}
          className={imgClass}
           />
        </div>
        )}
      </div>  
    );
}


export default PostContent;