import LeftProfile from "./LeftProfile";
import Messaging from "./Messaging/Messaging";
import RestContent from "./RestContent";




const Outer = () => {
    return (
      <>
      <div className="flex">
         <LeftProfile/>
         <RestContent/>        
      </div>
      <Messaging/>
      </>
    );
}

export default Outer;