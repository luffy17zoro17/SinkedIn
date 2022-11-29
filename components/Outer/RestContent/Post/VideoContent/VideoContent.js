



const VideoContent = ({src,ht,wd,title,classN}) => {

    return (
      <div>
        <iframe className={classN} width={wd} height={ht} src={src} 
        title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
        </iframe>

      </div>  
    );
}


export default VideoContent;