



const TextContent = ({title,content, className,titleclass}) => {
    return (
     <div>
       <h1 className={titleclass}>{title}</h1>
       <div className={className}>
            <div>{content}</div>
       </div>
     </div>   
    );
}

export default TextContent;