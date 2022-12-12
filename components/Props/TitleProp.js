



const TitleProps = ({title,titleClass,detail,detailClass}) => {
  return (
    <div>
     <h1 className={titleClass}>{title}</h1> 
     <p className={detailClass}>{detail}</p>
    </div> 
  );
}

export default TitleProps;