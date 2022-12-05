import Image from "next/image";




const PostContent = ({src,ht,wd,title, titleClass, classN, detail,time,
  following,text,icon,detailClass,timeiconClass, textClass,imgSrc,iht,iwd, 
  imgClass, current,currentClass,pic,prHt,prWd,prClass,picHoriz, gap, reactions
    ,reactionsClass,reactionCount,interactionCount, moreIcon, moreClass}) => {

    return (
      <>
        <div className={picHoriz}>
        <div>  
        <Image
          src={pic}
          height={prHt}
          width={prWd}
          alt=""
          className={prClass}
        />
        </div>
        <div>
        <h2 className={titleClass}>{title}
        <span className={currentClass}>{current}</span>
        <span className={moreClass}>{moreIcon}</span></h2>
        <p className={detailClass}>{detail}</p>
        <span className={timeiconClass}>{time}{icon}</span>
        </div>
        </div>
        <p className={textClass}>{text}</p>


        {src ? (            // for video
        <iframe className={classN} width={wd} height={ht} src={src} 
        title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen={true}> 
        </iframe>
        ) : (
        <div>
          <Image
          src={imgSrc}
          height={iht}      // for image
          width={iwd}
          className={imgClass}
          alt=""
           />
        </div>
        )}
        <div className={reactionsClass}>
          <div>{reactions}{reactionCount}</div><span>{interactionCount}</span>
        </div>
      </>  
    );
}


export default PostContent;