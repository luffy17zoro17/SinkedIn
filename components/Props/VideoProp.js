



const VideoProp = ({title,vidClass,vWd,vHt,vSrc}) => {
    return (
       <div>
         <iframe className={vidClass} width={vWd} height={vHt} src={vSrc} 
          title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen={true}> 
        </iframe>
       </div> 
    );
}

export default VideoProp;