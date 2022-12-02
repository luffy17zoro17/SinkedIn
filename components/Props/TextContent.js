



const TextContent = ({title,content, className,titleclass}) => {
    return (
     <div>
       <h1 className={titleclass}>{title}</h1>
       <ul className={className}>
         <li>
            {content}
         </li>
       </ul>
     </div>   
    );
}

export default TextContent;