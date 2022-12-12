import Image from "next/image";




const StartAPost = ({imgSrc,icon,zeroClass,oneClass,threeClass,
            setPostOpen}) => {

    return (
      <div className="border-4 border-red-500 fixed left-0 top-0 
       z-50 w-full h-full flex justify-center items-center">
       
       <div className="fixed bg-black opacity-70 left-0
        w-full h-full top-0 z-50"/>
       <div className="absolute p-5 pb-6 z-50 top-20 bg-white
        rounded-br-xl rounded-tl-xl w-full 
        shadow-md shadow-black sm:w-[35rem]">
           <div className="flex justify-between">
              <h1 className="text-xl pb-8">Create a post</h1>
              <span className="cursor-pointer" onMouseDown={()=>setPostOpen(false)}>{icon[11]}</span> 
           </div>

 
          
           <div className="flex">
             <div>
             <Image 
               src={imgSrc}
               width={50}
               height={50}
               alt=""
               className="object-cover rounded-full w-[3rem] h-[3rem]"
             />
             </div>
             <div>
                <div className="ml-4">
                <b>Thomas Mathew</b>
                <div className="border-2 border-black rounded-tl-3xl w-[8rem] rounded-br-3xl 
                p-[0.1rem] text-center">
                   <icon className={zeroClass}>
                      {icon[0]}Anyone{icon[1]}
                    </icon> 
                </div>
                </div>
             </div>      
           </div>
           <textarea
              rows={5}
              placeholder="What do you wanna talk about?"
              className="outline-none py-3 pt-7 w-full pl-4"
           />
           <div className="flex items-center gap-3 mb-4">
              <icon>{icon[2]}</icon><span className={oneClass}>Add Hastag</span> 
           </div>

           <div className="flex justify-between text-violet-500">
             <div>
               <icon className="space-x-3">
                  {icon[3]}{icon[4]}{icon[5]}{icon[6]}
                  {icon[7]}{icon[8]}{icon[9]}
               </icon>
             </div>

             <div className="space-x-3">
                <span className={threeClass}>
                   {icon[10]}Anyone
                </span>
                <span className="text-gray-400 bg-gray-200 rounded-2xl px-3 py-2">
                    Post
                </span>
             </div>
           </div>
          
       </div> 
      </div>  
       
    );
}

export default StartAPost;