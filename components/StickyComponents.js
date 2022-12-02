import Ad from "./Ad";
import Footer from "./Footer";
import LeftBottomRecent from "./LeftBottomRecent";




const StickyComponents = () => {
    return (
      <div className="flex justify-between">
         <div>
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