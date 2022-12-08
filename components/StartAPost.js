
import Image from "next/image";



const StartAPost = ({title,imgSrc,icon,zeroClass,oneClass,threeClass}) => {

    return (
      <div className="border-4 border-red-500 fixed left-0 top-0 
       z-50 w-full h-full flex justify-center items-center">
       
       <div className="fixed bg-black opacity-50 left-0
        w-full h-full top-0 z-50"/>
       <div className="absolute p-5 pb-6 z-50 top-20 bg-white
        rounded-br-xl rounded-tl-xl w-[31vw]">
           <h1 className="text-xl pb-8">Create a post</h1>

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
                   <icon className={zeroClass}>{icon[0].icon[0]}
                      Anyone{icon[0].icon[1]}
                    </icon> 
                </div>
                </div>
                <textarea
                  rows={5}
                  placeholder="What do you wanna talk about?"
                  className="border outline-none py-3 w-full"
                />
                <div>
                    <icon>{icon[1].icon}</icon><span className={oneClass}>Add Hastag</span> 
                </div>
                <div>
                   <icon className="">{icon[2].icon} 
                     {icon[3].icon}</icon><span className={threeClass}>Anyone</span>
                   <span className="text-gray-400 bg-gray-200 rounded-2xl px-3 py-2">
                       Post
                   </span>
                </div>
             </div>
           </div>
       </div> 
      </div>  
       
    );
}

export default StartAPost;