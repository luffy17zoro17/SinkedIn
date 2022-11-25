import ImageProps from "../../../Navbar/AllIcons/ImageProps";

const AdImage = [
  {
      id:1,
      title:"ProfileBackground",
      imgSrc:`https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80`,
      iconHref:"/",
      classN:`h-[15rem] w-full object-cover rounded-bl-xl 
            rounded-tr-xl relative left-0`,
      icon:"",
      ht:500,
      wd:1000,
      text:"",
  }
]



const Ad = () => {
    return ( 
      <div className="relative flex
       flex-col justify-center items-center">
         {AdImage.map((item)=>(
           <ImageProps
              src={item.imgSrc}
              ht={item.ht}
              wd={item.wd}
              className={item.classN}
           />
         ))
         }
         <h2 className="absolute text-2xl leading-[2.8rem]">
          <b className="bg-orange-400 p-1 
          shadow-md shadow-black">Check who's hiring</b><br/>
          <span className="bg-orange-400 shadow-md shadow-black
          p-1">on SinkedIn</span>
         </h2>
      </div>  
      
    
    );
}

export default Ad;

