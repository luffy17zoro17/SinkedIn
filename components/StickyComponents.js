import Ad from "./Ad";
import Footer from "./Footer";
import LeftBottomRecent from "./LeftBottomRecent";




const StickyComponents = () => {
    return (
      <div className="flex justify-center">
         <div className="w-[100%] sm:mx-[4rem] md:mx-[2rem]">
         <LeftBottomRecent/>
         </div>
         <div>
         <Ad/>
         <Footer/>
         </div>
      </div>  
    );
}

export default StickyComponents;