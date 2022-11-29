import LeftProfile from "./LeftProfile";

import RestContent from "./RestContent";




const Outer = () => {
    return (
      <>
      <div className="flex justify-center">
         <LeftProfile/>
         <RestContent/>        
      </div>
      
      </>
    );
}

export default Outer;