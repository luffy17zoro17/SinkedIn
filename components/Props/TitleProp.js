




const TitleProps = ({title,detail,detailClass}) => {
    return (
      <div>
       <h1>{title}</h1> 
       <p className={detailClass}>{detail}</p>
      </div> 
    );
}

export default TitleProps;