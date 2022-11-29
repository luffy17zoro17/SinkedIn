import LeftBottomRecent from "./LeftBottomRecent";
import LeftTopProfile from "./LeftTopProfile";




const LeftProfile = () => {
    return (
      
      <div className="">       
        <div><LeftTopProfile/></div>  
        <div className="sticky top-0"><LeftBottomRecent/></div>  
      </div>
    
    );
}

export default LeftProfile;

