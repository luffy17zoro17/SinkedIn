import PostHeader from './Props/PostHeader';
import PostList from '../components/PostList';



const Posts = ({postOpen, setPostOpen, title, icon,imgSrc, zeroClass, oneClass,
    threeClass, isClose, setIsClose}) => {
    return (
      <div className="">
        <div>
           <PostHeader
              postOpen={postOpen}
              setPostOpen={setPostOpen}
              title={title}
              imgSrc={imgSrc}
              icon={icon}
              zeroClass={zeroClass}
              oneClass={oneClass}
              threeClass={threeClass}
              isClose={isClose}
              setIsClose={setIsClose}
           />
        </div>   
        <div><PostList/></div>
      </div>
    );
}

export default Posts;