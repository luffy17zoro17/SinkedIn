import PostHeader from "./Post/PostHeader";
import PostList from "./Post/PostList";
import Ad from "./Ad/Ad";
import Footer from "./Footer/Footer";
import News from "./News/News";




const RestContent = () => {
    return (
    
     <div className="flex">
      <div>
        <PostHeader/>
        <PostList/>
      </div>  
      <div>
         <News/>
        <div>
         <Ad/>
         <Footer/>
        </div> 
      </div>
     </div> 
    
    );
}


export default RestContent;